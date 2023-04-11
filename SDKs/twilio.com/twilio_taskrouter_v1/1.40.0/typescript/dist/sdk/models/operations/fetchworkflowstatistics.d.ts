import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWorkflowStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkflowStatisticsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWorkflowStatisticsRequest extends SpeakeasyBase {
    /**
     * Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
     */
    endDate?: Date;
    /**
     * Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
     */
    minutes?: number;
    /**
     * A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, `5,30` would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA.
     */
    splitByWaitTime?: string;
    /**
     * Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    startDate?: Date;
    /**
     * Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
    /**
     * Returns the list of Tasks that are being controlled by the Workflow with the specified SID value.
     */
    workflowSid: string;
    /**
     * The SID of the Workspace with the Workflow to fetch.
     */
    workspaceSid: string;
}
export declare class FetchWorkflowStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceWorkflowWorkflowStatistics?: shared.TaskrouterV1WorkspaceWorkflowWorkflowStatistics;
}
