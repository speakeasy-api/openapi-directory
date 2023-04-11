import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAdsLink } from "./accountadslink";
import { AccountAutomaticImprovements, AccountAutomaticImprovementsInput } from "./accountautomaticimprovements";
import { AccountBusinessInformation } from "./accountbusinessinformation";
import { AccountConversionSettings } from "./accountconversionsettings";
import { AccountGoogleMyBusinessLink } from "./accountgooglemybusinesslink";
import { AccountUser } from "./accountuser";
import { AccountYouTubeChannelLink } from "./accountyoutubechannellink";
/**
 * Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
 */
export declare class AccountInput extends SpeakeasyBase {
    /**
     * Linked Ads accounts that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected either in the Ads interface or through the Google Ads API. To delete an active link, or to cancel a link request, remove it from the list.
     */
    adsLinks?: AccountAdsLink[];
    /**
     * Indicates whether the merchant sells adult content.
     */
    adultContent?: boolean;
    /**
     * The automatic improvements of the account can be used to automatically update items, improve images and shipping.
     */
    automaticImprovements?: AccountAutomaticImprovementsInput;
    /**
     * Automatically created label IDs that are assigned to the account by CSS Center.
     */
    automaticLabelIds?: string[];
    businessInformation?: AccountBusinessInformation;
    /**
     * Settings for conversion tracking.
     */
    conversionSettings?: AccountConversionSettings;
    /**
     * ID of CSS the account belongs to.
     */
    cssId?: string;
    googleMyBusinessLink?: AccountGoogleMyBusinessLink;
    /**
     * Required. 64-bit Merchant Center account ID.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#account`".
     */
    kind?: string;
    /**
     * Manually created label IDs that are assigned to the account by CSS.
     */
    labelIds?: string[];
    /**
     * Required. Display name for the account.
     */
    name?: string;
    /**
     * Client-specific, locally-unique, internal ID for the child account.
     */
    sellerId?: string;
    /**
     * Users with access to the account. Every account (except for subaccounts) must have at least one admin user.
     */
    users?: AccountUser[];
    /**
     * The merchant's website.
     */
    websiteUrl?: string;
    /**
     * Linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list.
     */
    youtubeChannelLinks?: AccountYouTubeChannelLink[];
}
/**
 * Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Output only. How the account is managed. Acceptable values are: - "`manual`" - "`automatic`"
     */
    accountManagement?: string;
    /**
     * Linked Ads accounts that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected either in the Ads interface or through the Google Ads API. To delete an active link, or to cancel a link request, remove it from the list.
     */
    adsLinks?: AccountAdsLink[];
    /**
     * Indicates whether the merchant sells adult content.
     */
    adultContent?: boolean;
    /**
     * The automatic improvements of the account can be used to automatically update items, improve images and shipping.
     */
    automaticImprovements?: AccountAutomaticImprovements;
    /**
     * Automatically created label IDs that are assigned to the account by CSS Center.
     */
    automaticLabelIds?: string[];
    businessInformation?: AccountBusinessInformation;
    /**
     * Settings for conversion tracking.
     */
    conversionSettings?: AccountConversionSettings;
    /**
     * ID of CSS the account belongs to.
     */
    cssId?: string;
    googleMyBusinessLink?: AccountGoogleMyBusinessLink;
    /**
     * Required. 64-bit Merchant Center account ID.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#account`".
     */
    kind?: string;
    /**
     * Manually created label IDs that are assigned to the account by CSS.
     */
    labelIds?: string[];
    /**
     * Required. Display name for the account.
     */
    name?: string;
    /**
     * Client-specific, locally-unique, internal ID for the child account.
     */
    sellerId?: string;
    /**
     * Users with access to the account. Every account (except for subaccounts) must have at least one admin user.
     */
    users?: AccountUser[];
    /**
     * The merchant's website.
     */
    websiteUrl?: string;
    /**
     * Linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list.
     */
    youtubeChannelLinks?: AccountYouTubeChannelLink[];
}
