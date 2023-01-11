package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceRepositoryResourceAptRepository
 * Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`.
**/
public class OsPolicyResourceRepositoryResourceAptRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archiveType")
    public OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum archiveType;
    public OsPolicyResourceRepositoryResourceAptRepository withArchiveType(OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum archiveType) {
        this.archiveType = archiveType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("components")
    public String[] components;
    public OsPolicyResourceRepositoryResourceAptRepository withComponents(String[] components) {
        this.components = components;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distribution")
    public String distribution;
    public OsPolicyResourceRepositoryResourceAptRepository withDistribution(String distribution) {
        this.distribution = distribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gpgKey")
    public String gpgKey;
    public OsPolicyResourceRepositoryResourceAptRepository withGpgKey(String gpgKey) {
        this.gpgKey = gpgKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public OsPolicyResourceRepositoryResourceAptRepository withUri(String uri) {
        this.uri = uri;
        return this;
    }
}