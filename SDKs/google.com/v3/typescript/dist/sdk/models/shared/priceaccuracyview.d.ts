import { SpeakeasyBase } from "../../../internal/utils";
import { PriceAccuracyRow } from "./priceaccuracyrow";
/**
 * A price accuracy view. Covers the price accuracy reports functionality in pre-v3.0 API versions. For more information, refer to [Price Accuracy report](https://support.google.com/hotelprices/answer/6318506).
 */
export declare class PriceAccuracyView extends SpeakeasyBase {
    /**
     * Resource name should be in the format `accounts/{account_id}/priceAccuracyViews/{report_date}`.
     */
    name?: string;
    /**
     * The list of rows that match the query.
     */
    results?: PriceAccuracyRow[];
}
