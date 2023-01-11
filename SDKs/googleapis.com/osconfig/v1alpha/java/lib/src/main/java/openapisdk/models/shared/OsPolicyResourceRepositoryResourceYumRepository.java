package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceRepositoryResourceYumRepository
 * Represents a single yum package repository. These are added to a repo file that is managed at `/etc/yum.repos.d/google_osconfig.repo`.
**/
public class OsPolicyResourceRepositoryResourceYumRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseUrl")
    public String baseUrl;
    public OsPolicyResourceRepositoryResourceYumRepository withBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public OsPolicyResourceRepositoryResourceYumRepository withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gpgKeys")
    public String[] gpgKeys;
    public OsPolicyResourceRepositoryResourceYumRepository withGpgKeys(String[] gpgKeys) {
        this.gpgKeys = gpgKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OsPolicyResourceRepositoryResourceYumRepository withId(String id) {
        this.id = id;
        return this;
    }
}