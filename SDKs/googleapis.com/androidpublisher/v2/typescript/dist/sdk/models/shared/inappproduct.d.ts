import { SpeakeasyBase } from "../../../internal/utils";
import { InAppProductListing } from "./inappproductlisting";
import { Price } from "./price";
/**
 * Successful response
 */
export declare class InAppProduct extends SpeakeasyBase {
    /**
     * The default language of the localized data, as defined by BCP 47. e.g. "en-US", "en-GB".
     */
    defaultLanguage?: string;
    defaultPrice?: Price;
    /**
     * Grace period of the subscription, specified in ISO 8601 format. It will allow developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values = "P3D" (three days), "P7D" (seven days), "P14D" (fourteen days), and "P30D" (thirty days)
     */
    gracePeriod?: string;
    /**
     * List of localized title and description data.
     */
    listings?: Record<string, InAppProductListing>;
    /**
     * The package name of the parent app.
     */
    packageName?: string;
    /**
     * Prices per buyer region. None of these prices should be zero. In-app products can never be free.
     */
    prices?: Record<string, Price>;
    /**
     * Purchase type enum value. Unmodifiable after creation.
     */
    purchaseType?: string;
    /**
     * The stock-keeping-unit (SKU) of the product, unique within an app.
     */
    sku?: string;
    status?: string;
    /**
     * Subscription period, specified in ISO 8601 format. Acceptable values are "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year).
     */
    subscriptionPeriod?: string;
    /**
     * Trial period, specified in ISO 8601 format. Acceptable values are anything between "P7D" (seven days) and "P999D" (999 days). Seasonal subscriptions cannot have a trial period.
     */
    trialPeriod?: string;
}
