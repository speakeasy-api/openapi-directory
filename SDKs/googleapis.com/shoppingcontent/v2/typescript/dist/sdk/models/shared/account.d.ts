import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAdwordsLink } from "./accountadwordslink";
import { AccountBusinessInformation } from "./accountbusinessinformation";
import { AccountGoogleMyBusinessLink } from "./accountgooglemybusinesslink";
import { AccountUser } from "./accountuser";
import { AccountYouTubeChannelLink } from "./accountyoutubechannellink";
/**
 * Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role.
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Indicates whether the merchant sells adult content.
     */
    adultContent?: boolean;
    /**
     * List of linked AdWords accounts that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected either in the AdWords interface or through the AdWords API. To delete an active link, or to cancel a link request, remove it from the list.
     */
    adwordsLinks?: AccountAdwordsLink[];
    businessInformation?: AccountBusinessInformation;
    googleMyBusinessLink?: AccountGoogleMyBusinessLink;
    /**
     * Required for update. Merchant Center account ID.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#account`"
     */
    kind?: string;
    /**
     * Required. Display name for the account.
     */
    name?: string;
    /**
     * [DEPRECATED] This field is never returned and will be ignored if provided.
     */
    reviewsUrl?: string;
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
     * List of linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list.
     */
    youtubeChannelLinks?: AccountYouTubeChannelLink[];
}
