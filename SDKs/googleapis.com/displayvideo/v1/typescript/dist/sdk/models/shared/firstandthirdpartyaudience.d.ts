import { SpeakeasyBase } from "../../../internal/utils";
import { ContactInfoList } from "./contactinfolist";
import { MobileDeviceIdList } from "./mobiledeviceidlist";
/**
 * The type of the audience.
 */
export declare enum FirstAndThirdPartyAudienceAudienceTypeEnum {
    AudienceTypeUnspecified = "AUDIENCE_TYPE_UNSPECIFIED",
    CustomerMatchContactInfo = "CUSTOMER_MATCH_CONTACT_INFO",
    CustomerMatchDeviceId = "CUSTOMER_MATCH_DEVICE_ID",
    CustomerMatchUserId = "CUSTOMER_MATCH_USER_ID",
    ActivityBased = "ACTIVITY_BASED",
    FrequencyCap = "FREQUENCY_CAP",
    TagBased = "TAG_BASED",
    YoutubeUsers = "YOUTUBE_USERS",
    Licensed = "LICENSED"
}
/**
 * Whether the audience is a first or third party audience.
 */
export declare enum FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum {
    FirstAndThirdPartyAudienceTypeUnspecified = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED",
    FirstAndThirdPartyAudienceTypeFirstParty = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY",
    FirstAndThirdPartyAudienceTypeThirdParty = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_THIRD_PARTY"
}
/**
 * Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
 */
export declare class FirstAndThirdPartyAudienceInput extends SpeakeasyBase {
    /**
     * The app_id matches with the type of the mobile_device_ids being uploaded. Only applicable to audience_type `CUSTOMER_MATCH_DEVICE_ID`
     */
    appId?: string;
    /**
     * The type of the audience.
     */
    audienceType?: FirstAndThirdPartyAudienceAudienceTypeEnum;
    /**
     * Wrapper message for a list of contact information defining Customer Match audience members.
     */
    contactInfoList?: ContactInfoList;
    /**
     * The user-provided description of the audience. Only applicable to first party audiences.
     */
    description?: string;
    /**
     * The display name of the first and third party audience.
     */
    displayName?: string;
    /**
     * Whether the audience is a first or third party audience.
     */
    firstAndThirdPartyAudienceType?: FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum;
    /**
     * The duration in days that an entry remains in the audience after the qualifying event. If the audience has no expiration, set the value of this field to 10000. Otherwise, the set value must be greater than 0 and less than or equal to 540. Only applicable to first party audiences. This field is required if one of the following audience_type is used: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
     */
    membershipDurationDays?: string;
    /**
     * Wrapper message for a list of mobile device IDs defining Customer Match audience members.
     */
    mobileDeviceIdList?: MobileDeviceIdList;
}
/**
 * Output only. The source of the audience.
 */
export declare enum FirstAndThirdPartyAudienceAudienceSourceEnum {
    AudienceSourceUnspecified = "AUDIENCE_SOURCE_UNSPECIFIED",
    DisplayVideo360 = "DISPLAY_VIDEO_360",
    CampaignManager = "CAMPAIGN_MANAGER",
    AdManager = "AD_MANAGER",
    SearchAds360 = "SEARCH_ADS_360",
    Youtube = "YOUTUBE",
    AdsDataHub = "ADS_DATA_HUB"
}
/**
 * Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
 */
export declare class FirstAndThirdPartyAudience extends SpeakeasyBase {
    /**
     * Output only. The estimated audience size for the Display network in the past month. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only returned in GET request.
     */
    activeDisplayAudienceSize?: string;
    /**
     * The app_id matches with the type of the mobile_device_ids being uploaded. Only applicable to audience_type `CUSTOMER_MATCH_DEVICE_ID`
     */
    appId?: string;
    /**
     * Output only. The source of the audience.
     */
    audienceSource?: FirstAndThirdPartyAudienceAudienceSourceEnum;
    /**
     * The type of the audience.
     */
    audienceType?: FirstAndThirdPartyAudienceAudienceTypeEnum;
    /**
     * Wrapper message for a list of contact information defining Customer Match audience members.
     */
    contactInfoList?: ContactInfoList;
    /**
     * The user-provided description of the audience. Only applicable to first party audiences.
     */
    description?: string;
    /**
     * Output only. The estimated audience size for the Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only returned in GET request.
     */
    displayAudienceSize?: string;
    /**
     * Output only. The estimated desktop audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request.
     */
    displayDesktopAudienceSize?: string;
    /**
     * Output only. The estimated mobile app audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request.
     */
    displayMobileAppAudienceSize?: string;
    /**
     * Output only. The estimated mobile web audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request.
     */
    displayMobileWebAudienceSize?: string;
    /**
     * The display name of the first and third party audience.
     */
    displayName?: string;
    /**
     * Output only. The unique ID of the first and third party audience. Assigned by the system.
     */
    firstAndThirdPartyAudienceId?: string;
    /**
     * Whether the audience is a first or third party audience.
     */
    firstAndThirdPartyAudienceType?: FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum;
    /**
     * Output only. The estimated audience size for Gmail network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request.
     */
    gmailAudienceSize?: string;
    /**
     * The duration in days that an entry remains in the audience after the qualifying event. If the audience has no expiration, set the value of this field to 10000. Otherwise, the set value must be greater than 0 and less than or equal to 540. Only applicable to first party audiences. This field is required if one of the following audience_type is used: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
     */
    membershipDurationDays?: string;
    /**
     * Wrapper message for a list of mobile device IDs defining Customer Match audience members.
     */
    mobileDeviceIdList?: MobileDeviceIdList;
    /**
     * Output only. The resource name of the first and third party audience.
     */
    name?: string;
    /**
     * Output only. The estimated audience size for YouTube network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request.
     */
    youtubeAudienceSize?: string;
}
