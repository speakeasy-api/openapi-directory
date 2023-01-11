package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceRepositoryResourceZypperRepository
 * Represents a single zypper package repository. These are added to a repo file that is managed at `/etc/zypp/repos.d/google_osconfig.repo`.
**/
public class OsPolicyResourceRepositoryResourceZypperRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseUrl")
    public String baseUrl;
    public OsPolicyResourceRepositoryResourceZypperRepository withBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public OsPolicyResourceRepositoryResourceZypperRepository withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gpgKeys")
    public String[] gpgKeys;
    public OsPolicyResourceRepositoryResourceZypperRepository withGpgKeys(String[] gpgKeys) {
        this.gpgKeys = gpgKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OsPolicyResourceRepositoryResourceZypperRepository withId(String id) {
        this.id = id;
        return this;
    }
}