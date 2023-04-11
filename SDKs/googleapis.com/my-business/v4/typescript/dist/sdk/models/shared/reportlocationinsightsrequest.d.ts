import { SpeakeasyBase } from "../../../internal/utils";
import { BasicMetricsRequest } from "./basicmetricsrequest";
import { DrivingDirectionMetricsRequest } from "./drivingdirectionmetricsrequest";
/**
 * Request message for Insights.ReportLocationInsights.
 */
export declare class ReportLocationInsightsRequest extends SpeakeasyBase {
    /**
     * A request for basic metric insights.
     */
    basicRequest?: BasicMetricsRequest;
    /**
     * A request for driving direction insights.
     */
    drivingDirectionsRequest?: DrivingDirectionMetricsRequest;
    /**
     * A collection of locations to fetch insights for, specified by their names.
     */
    locationNames?: string[];
}
