import { SpeakeasyBase } from "../../../internal/utils";
import { BasicMetricsRequest } from "./basicmetricsrequest";
/**
 * Request message for Insights.ReportLocalPostInsights
 */
export declare class ReportLocalPostInsightsRequest extends SpeakeasyBase {
    /**
     * A request for basic metric insights.
     */
    basicRequest?: BasicMetricsRequest;
    /**
     * Required. The list of posts for which to fetch insights data. All posts have to belong to the location whose name is specified in the `name` field.
     */
    localPostNames?: string[];
}
