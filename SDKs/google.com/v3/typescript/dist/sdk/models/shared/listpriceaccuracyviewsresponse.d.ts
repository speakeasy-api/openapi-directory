import { SpeakeasyBase } from "../../../internal/utils";
import { PriceAccuracyView } from "./priceaccuracyview";
/**
 * Response message for PriceAccuracyViewService.ListPriceAccuracyViews.
 */
export declare class ListPriceAccuracyViewsResponse extends SpeakeasyBase {
    /**
     * The list of rows that match the query.
     */
    priceAccuracyViews?: PriceAccuracyView[];
}
