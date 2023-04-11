import { SpeakeasyBase } from "../../../internal/utils";
import { LocationDrivingDirectionMetrics } from "./locationdrivingdirectionmetrics";
import { LocationMetrics } from "./locationmetrics";
/**
 * Response message for `Insights.ReportLocationInsights`.
 */
export declare class ReportLocationInsightsResponse extends SpeakeasyBase {
    /**
     * A collection of values for driving direction-related metrics.
     */
    locationDrivingDirectionMetrics?: LocationDrivingDirectionMetrics[];
    /**
     * A collection of metric values by location.
     */
    locationMetrics?: LocationMetrics[];
}
