import { SpeakeasyBase } from "../../../internal/utils";
import { RepricingRuleReport } from "./repricingrulereport";
/**
 * Response message for the ListRepricingRuleReports method.
 */
export declare class ListRepricingRuleReportsResponse extends SpeakeasyBase {
    /**
     * A token for retrieving the next page. Its absence means there is no subsequent page.
     */
    nextPageToken?: string;
    /**
     * Daily reports for the given Repricing rule.
     */
    repricingRuleReports?: RepricingRuleReport[];
}
