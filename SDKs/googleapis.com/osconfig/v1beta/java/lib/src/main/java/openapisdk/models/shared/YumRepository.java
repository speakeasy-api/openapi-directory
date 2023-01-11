package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * YumRepository
 * Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`.
**/
public class YumRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseUrl")
    public String baseUrl;
    public YumRepository withBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public YumRepository withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gpgKeys")
    public String[] gpgKeys;
    public YumRepository withGpgKeys(String[] gpgKeys) {
        this.gpgKeys = gpgKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public YumRepository withId(String id) {
        this.id = id;
        return this;
    }
}