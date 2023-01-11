package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ZypperRepository
 * Represents a single Zypper package repository. This repository is added to a repo file that is stored at `/etc/zypp/repos.d/google_osconfig.repo`.
**/
public class ZypperRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseUrl")
    public String baseUrl;
    public ZypperRepository withBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ZypperRepository withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gpgKeys")
    public String[] gpgKeys;
    public ZypperRepository withGpgKeys(String[] gpgKeys) {
        this.gpgKeys = gpgKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ZypperRepository withId(String id) {
        this.id = id;
        return this;
    }
}