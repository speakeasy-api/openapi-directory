import { SpeakeasyBase } from "../../../internal/utils";
import { AccountLinkTarget } from "./accountlinktarget";
/**
 * The current status of the account link.
 */
export declare enum AccountLinkStatusEnum {
    AccountLinkStatusUnspecified = "ACCOUNT_LINK_STATUS_UNSPECIFIED",
    AccountLinkStatusUnknown = "ACCOUNT_LINK_STATUS_UNKNOWN",
    RequestedFromHotelCenter = "REQUESTED_FROM_HOTEL_CENTER",
    RequestedFromGoogleAds = "REQUESTED_FROM_GOOGLE_ADS",
    Approved = "APPROVED"
}
/**
 * An account link. Represents the link between a Google Ads customer and a Hotel Ads (Hotel Center) account. An account link defines the set of hotels under the Hotel Center account that is linked to the Google Ads customer.
 */
export declare class AccountLink extends SpeakeasyBase {
    /**
     * Defines whether all properties or a subset of properties in the Hotel Center account can be managed with the linked Google Ads account. If a subset, the specific properties are specified.
     */
    accountLinkTarget?: AccountLinkTarget;
    /**
     * Required for CREATE requests. The value representing the Google Ads customer ID in the format `customers/{google_ads_customer_id}`. For example: `customers/0123456789`. Note that the `googleAdsCustomerName` field is not returned in responses to GET requests.
     */
    googleAdsCustomerName?: string;
    /**
     * The resource name for the account link in the format `accounts/{account_id}/accountLinks/{account_link_id}`.
     */
    name?: string;
    /**
     * The current status of the account link.
     */
    status?: AccountLinkStatusEnum;
}
