package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AptRepository
 * Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`.
**/
public class AptRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archiveType")
    public AptRepositoryArchiveTypeEnum archiveType;
    public AptRepository withArchiveType(AptRepositoryArchiveTypeEnum archiveType) {
        this.archiveType = archiveType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("components")
    public String[] components;
    public AptRepository withComponents(String[] components) {
        this.components = components;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distribution")
    public String distribution;
    public AptRepository withDistribution(String distribution) {
        this.distribution = distribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gpgKey")
    public String gpgKey;
    public AptRepository withGpgKey(String gpgKey) {
        this.gpgKey = gpgKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public AptRepository withUri(String uri) {
        this.uri = uri;
        return this;
    }
}