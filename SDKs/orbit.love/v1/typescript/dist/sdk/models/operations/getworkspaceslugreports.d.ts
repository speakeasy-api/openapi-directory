import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugReportsSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class GetWorkspaceSlugReportsRequest extends SpeakeasyBase {
    activityType?: string;
    /**
     * Filter activities before this date. Format: YYYY-MM-DD.
     */
    endDate?: string;
    properties?: string;
    /**
     * Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.
     */
    relative?: string;
    /**
     * Filter activities after this date. Format: YYYY-MM-DD.
     */
    startDate?: string;
    /**
     * Deprecated in favor of the activity_type parameter.
     */
    type?: string;
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugReportsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
