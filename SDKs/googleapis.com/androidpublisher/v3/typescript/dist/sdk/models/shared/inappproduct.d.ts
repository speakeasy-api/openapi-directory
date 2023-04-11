import { SpeakeasyBase } from "../../../internal/utils";
import { InAppProductListing } from "./inappproductlisting";
import { ManagedProductTaxAndComplianceSettings } from "./managedproducttaxandcompliancesettings";
import { Price } from "./price";
import { SubscriptionTaxAndComplianceSettings } from "./subscriptiontaxandcompliancesettings";
/**
 * The type of the product, e.g. a recurring subscription.
 */
export declare enum InAppProductPurchaseTypeEnum {
    PurchaseTypeUnspecified = "purchaseTypeUnspecified",
    ManagedUser = "managedUser",
    Subscription = "subscription"
}
/**
 * The status of the product, e.g. whether it's active.
 */
export declare enum InAppProductStatusEnum {
    StatusUnspecified = "statusUnspecified",
    Active = "active",
    Inactive = "inactive"
}
/**
 * An in-app product. The resource for InappproductsService.
 */
export declare class InAppProduct extends SpeakeasyBase {
    /**
     * Default language of the localized data, as defined by BCP-47. e.g. "en-US".
     */
    defaultLanguage?: string;
    /**
     * Definition of a price, i.e. currency and units.
     */
    defaultPrice?: Price;
    /**
     * Grace period of the subscription, specified in ISO 8601 format. Allows developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values are P0D (zero days), P3D (three days), P7D (seven days), P14D (14 days), and P30D (30 days).
     */
    gracePeriod?: string;
    /**
     * List of localized title and description data. Map key is the language of the localized data, as defined by BCP-47, e.g. "en-US".
     */
    listings?: Record<string, InAppProductListing>;
    /**
     * Details about taxation and legal compliance for managed products.
     */
    managedProductTaxesAndComplianceSettings?: ManagedProductTaxAndComplianceSettings;
    /**
     * Package name of the parent app.
     */
    packageName?: string;
    /**
     * Prices per buyer region. None of these can be zero, as in-app products are never free. Map key is region code, as defined by ISO 3166-2.
     */
    prices?: Record<string, Price>;
    /**
     * The type of the product, e.g. a recurring subscription.
     */
    purchaseType?: InAppProductPurchaseTypeEnum;
    /**
     * Stock-keeping-unit (SKU) of the product, unique within an app.
     */
    sku?: string;
    /**
     * The status of the product, e.g. whether it's active.
     */
    status?: InAppProductStatusEnum;
    /**
     * Subscription period, specified in ISO 8601 format. Acceptable values are P1W (one week), P1M (one month), P3M (three months), P6M (six months), and P1Y (one year).
     */
    subscriptionPeriod?: string;
    /**
     * Details about taxation, Google Play policy and legal compliance for subscription products.
     */
    subscriptionTaxesAndComplianceSettings?: SubscriptionTaxAndComplianceSettings;
    /**
     * Trial period, specified in ISO 8601 format. Acceptable values are anything between P7D (seven days) and P999D (999 days).
     */
    trialPeriod?: string;
}
