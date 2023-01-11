package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirstAndThirdPartyAudienceInput
 * Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
**/
public class FirstAndThirdPartyAudienceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public FirstAndThirdPartyAudienceInput withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceType")
    public FirstAndThirdPartyAudienceAudienceTypeEnum audienceType;
    public FirstAndThirdPartyAudienceInput withAudienceType(FirstAndThirdPartyAudienceAudienceTypeEnum audienceType) {
        this.audienceType = audienceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactInfoList")
    public ContactInfoList contactInfoList;
    public FirstAndThirdPartyAudienceInput withContactInfoList(ContactInfoList contactInfoList) {
        this.contactInfoList = contactInfoList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FirstAndThirdPartyAudienceInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public FirstAndThirdPartyAudienceInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstAndThirdPartyAudienceType")
    public FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum firstAndThirdPartyAudienceType;
    public FirstAndThirdPartyAudienceInput withFirstAndThirdPartyAudienceType(FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum firstAndThirdPartyAudienceType) {
        this.firstAndThirdPartyAudienceType = firstAndThirdPartyAudienceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipDurationDays")
    public String membershipDurationDays;
    public FirstAndThirdPartyAudienceInput withMembershipDurationDays(String membershipDurationDays) {
        this.membershipDurationDays = membershipDurationDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileDeviceIdList")
    public MobileDeviceIdList mobileDeviceIdList;
    public FirstAndThirdPartyAudienceInput withMobileDeviceIdList(MobileDeviceIdList mobileDeviceIdList) {
        this.mobileDeviceIdList = mobileDeviceIdList;
        return this;
    }
}