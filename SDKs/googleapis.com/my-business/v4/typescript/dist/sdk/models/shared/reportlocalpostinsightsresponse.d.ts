import { SpeakeasyBase } from "../../../internal/utils";
import { LocalPostMetrics } from "./localpostmetrics";
/**
 * Response message for Insights.ReportLocalPostInsights
 */
export declare class ReportLocalPostInsightsResponse extends SpeakeasyBase {
    /**
     * One entry per requested post corresponding to this location.
     */
    localPostMetrics?: LocalPostMetrics[];
    name?: string;
    /**
     * Time zone (IANA timezone IDs, eg, 'Europe/London') of the location.
     */
    timeZone?: string;
}
