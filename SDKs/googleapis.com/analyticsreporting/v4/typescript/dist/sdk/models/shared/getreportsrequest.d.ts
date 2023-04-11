import { SpeakeasyBase } from "../../../internal/utils";
import { ReportRequest } from "./reportrequest";
/**
 * The batch request containing multiple report request.
 */
export declare class GetReportsRequest extends SpeakeasyBase {
    /**
     * Requests, each request will have a separate response. There can be a maximum of 5 requests. All requests should have the same `dateRanges`, `viewId`, `segments`, `samplingLevel`, and `cohortGroup`.
     */
    reportRequests?: ReportRequest[];
    /**
     * Enables [resource based quotas](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4), (defaults to `False`). If this field is set to `True` the per view (profile) quotas are governed by the computational cost of the request. Note that using cost based quotas will higher enable sampling rates. (10 Million for `SMALL`, 100M for `LARGE`. See the [limits and quotas documentation](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4) for details.
     */
    useResourceQuotas?: boolean;
}
