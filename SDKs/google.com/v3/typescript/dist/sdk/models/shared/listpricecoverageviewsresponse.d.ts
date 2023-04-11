import { SpeakeasyBase } from "../../../internal/utils";
import { PriceCoverageView } from "./pricecoverageview";
/**
 * Response message for PriceCoverageViewService.ListPriceCoverageViews.
 */
export declare class ListPriceCoverageViewsResponse extends SpeakeasyBase {
    /**
     * Hotel price coverage stats.
     */
    priceCoverageViews?: PriceCoverageView[];
}
