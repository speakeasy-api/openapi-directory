import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectFilter } from "./objectfilter";
/**
 * Trafficker type of this user profile. This is a read-only field.
 */
export declare enum AccountUserProfileTraffickerTypeEnum {
    InternalNonTrafficker = "INTERNAL_NON_TRAFFICKER",
    InternalTrafficker = "INTERNAL_TRAFFICKER",
    ExternalTrafficker = "EXTERNAL_TRAFFICKER"
}
/**
 * User type of the user profile. This is a read-only field that can be left blank.
 */
export declare enum AccountUserProfileUserAccessTypeEnum {
    NormalUser = "NORMAL_USER",
    SuperUser = "SUPER_USER",
    InternalAdministrator = "INTERNAL_ADMINISTRATOR",
    ReadOnlySuperUser = "READ_ONLY_SUPER_USER"
}
/**
 * AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.
 */
export declare class AccountUserProfile extends SpeakeasyBase {
    /**
     * Account ID of the user profile. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be usable.
     */
    active?: boolean;
    /**
     * Object Filter.
     */
    advertiserFilter?: ObjectFilter;
    /**
     * Object Filter.
     */
    campaignFilter?: ObjectFilter;
    /**
     * Comments for this user profile.
     */
    comments?: string;
    /**
     * Email of the user profile. The email addresss must be linked to a Google Account. This field is required on insertion and is read-only after insertion.
     */
    email?: string;
    /**
     * ID of the user profile. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfile".
     */
    kind?: string;
    /**
     * Locale of the user profile. This is a required field. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional)
     */
    locale?: string;
    /**
     * Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and cannot contain whitespace or any of the following characters: "&;<>"#%,".
     */
    name?: string;
    /**
     * Object Filter.
     */
    siteFilter?: ObjectFilter;
    /**
     * Subaccount ID of the user profile. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Trafficker type of this user profile. This is a read-only field.
     */
    traffickerType?: AccountUserProfileTraffickerTypeEnum;
    /**
     * User type of the user profile. This is a read-only field that can be left blank.
     */
    userAccessType?: AccountUserProfileUserAccessTypeEnum;
    /**
     * Object Filter.
     */
    userRoleFilter?: ObjectFilter;
    /**
     * User role ID of the user profile. This is a required field.
     */
    userRoleId?: string;
}
