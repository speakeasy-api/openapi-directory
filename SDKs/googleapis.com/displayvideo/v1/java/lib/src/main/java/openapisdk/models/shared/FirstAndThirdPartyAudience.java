package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirstAndThirdPartyAudience
 * Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
**/
public class FirstAndThirdPartyAudience {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeDisplayAudienceSize")
    public String activeDisplayAudienceSize;
    public FirstAndThirdPartyAudience withActiveDisplayAudienceSize(String activeDisplayAudienceSize) {
        this.activeDisplayAudienceSize = activeDisplayAudienceSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public FirstAndThirdPartyAudience withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceSource")
    public FirstAndThirdPartyAudienceAudienceSourceEnum audienceSource;
    public FirstAndThirdPartyAudience withAudienceSource(FirstAndThirdPartyAudienceAudienceSourceEnum audienceSource) {
        this.audienceSource = audienceSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceType")
    public FirstAndThirdPartyAudienceAudienceTypeEnum audienceType;
    public FirstAndThirdPartyAudience withAudienceType(FirstAndThirdPartyAudienceAudienceTypeEnum audienceType) {
        this.audienceType = audienceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactInfoList")
    public ContactInfoList contactInfoList;
    public FirstAndThirdPartyAudience withContactInfoList(ContactInfoList contactInfoList) {
        this.contactInfoList = contactInfoList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FirstAndThirdPartyAudience withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayAudienceSize")
    public String displayAudienceSize;
    public FirstAndThirdPartyAudience withDisplayAudienceSize(String displayAudienceSize) {
        this.displayAudienceSize = displayAudienceSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayDesktopAudienceSize")
    public String displayDesktopAudienceSize;
    public FirstAndThirdPartyAudience withDisplayDesktopAudienceSize(String displayDesktopAudienceSize) {
        this.displayDesktopAudienceSize = displayDesktopAudienceSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayMobileAppAudienceSize")
    public String displayMobileAppAudienceSize;
    public FirstAndThirdPartyAudience withDisplayMobileAppAudienceSize(String displayMobileAppAudienceSize) {
        this.displayMobileAppAudienceSize = displayMobileAppAudienceSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayMobileWebAudienceSize")
    public String displayMobileWebAudienceSize;
    public FirstAndThirdPartyAudience withDisplayMobileWebAudienceSize(String displayMobileWebAudienceSize) {
        this.displayMobileWebAudienceSize = displayMobileWebAudienceSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public FirstAndThirdPartyAudience withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstAndThirdPartyAudienceId")
    public String firstAndThirdPartyAudienceId;
    public FirstAndThirdPartyAudience withFirstAndThirdPartyAudienceId(String firstAndThirdPartyAudienceId) {
        this.firstAndThirdPartyAudienceId = firstAndThirdPartyAudienceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstAndThirdPartyAudienceType")
    public FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum firstAndThirdPartyAudienceType;
    public FirstAndThirdPartyAudience withFirstAndThirdPartyAudienceType(FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum firstAndThirdPartyAudienceType) {
        this.firstAndThirdPartyAudienceType = firstAndThirdPartyAudienceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gmailAudienceSize")
    public String gmailAudienceSize;
    public FirstAndThirdPartyAudience withGmailAudienceSize(String gmailAudienceSize) {
        this.gmailAudienceSize = gmailAudienceSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipDurationDays")
    public String membershipDurationDays;
    public FirstAndThirdPartyAudience withMembershipDurationDays(String membershipDurationDays) {
        this.membershipDurationDays = membershipDurationDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileDeviceIdList")
    public MobileDeviceIdList mobileDeviceIdList;
    public FirstAndThirdPartyAudience withMobileDeviceIdList(MobileDeviceIdList mobileDeviceIdList) {
        this.mobileDeviceIdList = mobileDeviceIdList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FirstAndThirdPartyAudience withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youtubeAudienceSize")
    public String youtubeAudienceSize;
    public FirstAndThirdPartyAudience withYoutubeAudienceSize(String youtubeAudienceSize) {
        this.youtubeAudienceSize = youtubeAudienceSize;
        return this;
    }
}