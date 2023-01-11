import { SpeakeasyBase } from "../../../internal/utils";
import { LanguagePair } from "./languagepair";
import { BillingAddress } from "./billingaddress";
import { UserLinks } from "./userlinks";
import { Address } from "./address";
import { SocialMedia } from "./socialmedia";
import { UserGroup } from "./usergroup";
export declare class UserClientCorporate extends SpeakeasyBase {
    email?: string;
    id?: number;
    logo?: string;
    name?: string;
}
export declare class UserClient extends SpeakeasyBase {
    corporate?: UserClientCorporate;
    nps?: number;
    subjects?: Record<string, number>;
}
export declare class UserVendor extends SpeakeasyBase {
    canWorkManualFiles?: boolean;
    isFrozen?: boolean;
    isProofreader?: boolean;
    languagePairs?: LanguagePair[];
    nativeLanguage?: string;
    paypalEmail?: string;
    require1099?: boolean;
    tags?: string[];
    tmsUserName?: string;
}
export declare class User extends SpeakeasyBase {
    billing?: BillingAddress;
    birthday?: Date;
    canWorkManualFiles?: boolean;
    city?: string;
    client?: UserClient;
    corporateId?: number;
    country?: string;
    createdAt?: number;
    doNotContact?: boolean;
    email?: string;
    firstName?: string;
    hasPwd?: boolean;
    id?: number;
    isClient?: boolean;
    isDeveloper?: boolean;
    isProofreader?: boolean;
    isProspect?: boolean;
    isSalesPerson?: boolean;
    isVendor?: boolean;
    languagePairs?: LanguagePair[];
    lastName?: string;
    lastSeenOnlineAt?: number;
    links?: UserLinks;
    locale?: string;
    mailing?: Address;
    name?: string;
    nativeLanguage?: string;
    nps?: number;
    phoneNumber?: string;
    profilePicturePath?: string;
    socialMedia?: SocialMedia;
    state?: string;
    status?: string;
    street?: string;
    timezone?: string;
    tmsUserName?: string;
    userGroups?: UserGroup[];
    vendor?: UserVendor;
    zipCode?: string;
}
