package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountUserProfile
 * AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.
**/
public class AccountUserProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public AccountUserProfile withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public AccountUserProfile withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserFilter")
    public ObjectFilter advertiserFilter;
    public AccountUserProfile withAdvertiserFilter(ObjectFilter advertiserFilter) {
        this.advertiserFilter = advertiserFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignFilter")
    public ObjectFilter campaignFilter;
    public AccountUserProfile withCampaignFilter(ObjectFilter campaignFilter) {
        this.campaignFilter = campaignFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public AccountUserProfile withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public AccountUserProfile withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AccountUserProfile withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountUserProfile withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public AccountUserProfile withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccountUserProfile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteFilter")
    public ObjectFilter siteFilter;
    public AccountUserProfile withSiteFilter(ObjectFilter siteFilter) {
        this.siteFilter = siteFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public AccountUserProfile withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traffickerType")
    public AccountUserProfileTraffickerTypeEnum traffickerType;
    public AccountUserProfile withTraffickerType(AccountUserProfileTraffickerTypeEnum traffickerType) {
        this.traffickerType = traffickerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAccessType")
    public AccountUserProfileUserAccessTypeEnum userAccessType;
    public AccountUserProfile withUserAccessType(AccountUserProfileUserAccessTypeEnum userAccessType) {
        this.userAccessType = userAccessType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRoleFilter")
    public ObjectFilter userRoleFilter;
    public AccountUserProfile withUserRoleFilter(ObjectFilter userRoleFilter) {
        this.userRoleFilter = userRoleFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRoleId")
    public String userRoleId;
    public AccountUserProfile withUserRoleId(String userRoleId) {
        this.userRoleId = userRoleId;
        return this;
    }
}