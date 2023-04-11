import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { BillingAddress } from "./billingaddress";
import { LanguagePair } from "./languagepair";
import { ProfileSurvey } from "./profilesurvey";
import { SocialMedia } from "./socialmedia";
import { UserGroup } from "./usergroup";
import { UserLinks } from "./userlinks";
export declare class UserClientCorporate extends SpeakeasyBase {
    email?: string;
    id?: number;
    logo?: string;
    name?: string;
    phoneNumber?: string;
}
export declare class UserClient extends SpeakeasyBase {
    corporate?: UserClientCorporate;
    nps?: number;
    subjects?: Record<string, number>;
}
export declare class UserVendor extends SpeakeasyBase {
    canWorkManualFiles?: boolean;
    emailOpenRate?: number;
    isFrozen?: boolean;
    isProofreader?: boolean;
    languagePairs?: LanguagePair[];
    /**
     * Native language of user
     */
    nativeLanguage?: string;
    pamTqs?: number;
    paypalEmail?: string;
    profileSurvey?: ProfileSurvey;
    require1099?: boolean;
    tags?: string[];
    tmsUserName?: string;
    vendorType?: string;
}
/**
 * Created or updated user
 */
export declare class User extends SpeakeasyBase {
    billing?: BillingAddress;
    birthday?: Date;
    /**
     * \@deprecated. use `vendor` key
     */
    canWorkManualFiles?: boolean;
    /**
     * \@deprecated. use mailing or billing key.
     */
    city?: string;
    client?: UserClient;
    corporateId?: number;
    /**
     * \@deprecated. use mailing or billing key.
     */
    country?: string;
    /**
     * Unix epoch time
     */
    createdAt?: number;
    doNotContact?: boolean;
    email?: string;
    firstName?: string;
    hasPwd?: boolean;
    id?: number;
    isClient?: boolean;
    isDeveloper?: boolean;
    /**
     * \@deprecated. use `vendor` key
     */
    isProofreader?: boolean;
    isProspect?: boolean;
    isSalesPerson?: boolean;
    isVendor?: boolean;
    /**
     * \@deprecated. use `vendor` key
     */
    languagePairs?: LanguagePair[];
    lastName?: string;
    /**
     * Unix epoch time
     */
    lastSeenOnlineAt?: number;
    links?: UserLinks;
    /**
     * User Locale
     */
    locale?: string;
    mailing?: Address;
    name?: string;
    /**
     * \@deprecated. Native language of user
     */
    nativeLanguage?: string;
    /**
     * \@deprecated. use /stats endpoint for the current nps value.
     */
    nps?: number;
    phoneNumber?: string;
    profilePicturePath?: string;
    socialMedia?: SocialMedia;
    /**
     * \@deprecated. use mailing or billing key.
     */
    state?: string;
    status?: string;
    /**
     * \@deprecated. use mailing or billing key.
     */
    street?: string;
    timezone?: string;
    /**
     * \@deprecated. use `vendor` key
     */
    tmsUserName?: string;
    userGroups?: UserGroup[];
    vendor?: UserVendor;
    /**
     * \@deprecated. use mailing or billing key. new key name is "zip".
     */
    zipCode?: string;
}
