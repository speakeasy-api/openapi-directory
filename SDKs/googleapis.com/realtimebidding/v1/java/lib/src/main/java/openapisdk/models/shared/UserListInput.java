package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserListInput
 * Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
**/
public class UserListInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UserListInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public UserListInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipDurationDays")
    public String membershipDurationDays;
    public UserListInput withMembershipDurationDays(String membershipDurationDays) {
        this.membershipDurationDays = membershipDurationDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlRestriction")
    public UrlRestriction urlRestriction;
    public UserListInput withUrlRestriction(UrlRestriction urlRestriction) {
        this.urlRestriction = urlRestriction;
        return this;
    }
}