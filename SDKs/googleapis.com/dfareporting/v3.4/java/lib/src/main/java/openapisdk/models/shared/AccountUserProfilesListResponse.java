package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountUserProfilesListResponse
 * Account User Profile List Response
**/
public class AccountUserProfilesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountUserProfiles")
    public AccountUserProfile[] accountUserProfiles;
    public AccountUserProfilesListResponse withAccountUserProfiles(AccountUserProfile[] accountUserProfiles) {
        this.accountUserProfiles = accountUserProfiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountUserProfilesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public AccountUserProfilesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}