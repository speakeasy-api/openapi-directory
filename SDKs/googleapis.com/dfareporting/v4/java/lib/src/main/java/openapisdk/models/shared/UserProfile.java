package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserProfile
 * A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The profile_id needs to be specified in other API requests. 
**/
public class UserProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public UserProfile withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public UserProfile withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public UserProfile withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public UserProfile withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileId")
    public String profileId;
    public UserProfile withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subAccountId")
    public String subAccountId;
    public UserProfile withSubAccountId(String subAccountId) {
        this.subAccountId = subAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subAccountName")
    public String subAccountName;
    public UserProfile withSubAccountName(String subAccountName) {
        this.subAccountName = subAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userName")
    public String userName;
    public UserProfile withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}