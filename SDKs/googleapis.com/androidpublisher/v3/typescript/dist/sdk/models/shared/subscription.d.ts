import { SpeakeasyBase } from "../../../internal/utils";
import { BasePlan } from "./baseplan";
import { SubscriptionListing } from "./subscriptionlisting";
import { SubscriptionTaxAndComplianceSettings } from "./subscriptiontaxandcompliancesettings";
import { BasePlanInput } from "./baseplan";
/**
 * A single subscription for an app.
**/
export declare class Subscription extends SpeakeasyBase {
    archived?: boolean;
    basePlans?: BasePlan[];
    listings?: SubscriptionListing[];
    packageName?: string;
    productId?: string;
    taxAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;
}
/**
 * A single subscription for an app.
**/
export declare class SubscriptionInput extends SpeakeasyBase {
    basePlans?: BasePlanInput[];
    listings?: SubscriptionListing[];
    packageName?: string;
    productId?: string;
    taxAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;
}
