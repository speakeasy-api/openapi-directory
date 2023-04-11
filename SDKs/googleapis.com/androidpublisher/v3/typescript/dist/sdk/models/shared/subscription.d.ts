import { SpeakeasyBase } from "../../../internal/utils";
import { BasePlan, BasePlanInput } from "./baseplan";
import { SubscriptionListing } from "./subscriptionlisting";
import { SubscriptionTaxAndComplianceSettings } from "./subscriptiontaxandcompliancesettings";
/**
 * A single subscription for an app.
 */
export declare class SubscriptionInput extends SpeakeasyBase {
    /**
     * The set of base plans for this subscription. Represents the prices and duration of the subscription if no other offers apply.
     */
    basePlans?: BasePlanInput[];
    /**
     * Required. List of localized listings for this subscription. Must contain at least an entry for the default language of the parent app.
     */
    listings?: SubscriptionListing[];
    /**
     * Immutable. Package name of the parent app.
     */
    packageName?: string;
    /**
     * Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.
     */
    productId?: string;
    /**
     * Details about taxation, Google Play policy and legal compliance for subscription products.
     */
    taxAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;
}
/**
 * A single subscription for an app.
 */
export declare class Subscription extends SpeakeasyBase {
    /**
     * Output only. Whether this subscription is archived. Archived subscriptions are not available to any subscriber any longer, cannot be updated, and are not returned in list requests unless the show archived flag is passed in.
     */
    archived?: boolean;
    /**
     * The set of base plans for this subscription. Represents the prices and duration of the subscription if no other offers apply.
     */
    basePlans?: BasePlan[];
    /**
     * Required. List of localized listings for this subscription. Must contain at least an entry for the default language of the parent app.
     */
    listings?: SubscriptionListing[];
    /**
     * Immutable. Package name of the parent app.
     */
    packageName?: string;
    /**
     * Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.
     */
    productId?: string;
    /**
     * Details about taxation, Google Play policy and legal compliance for subscription products.
     */
    taxAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;
}
