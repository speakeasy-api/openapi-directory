import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTaskQueueCumulativeStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchTaskQueueCumulativeStatisticsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTaskQueueCumulativeStatisticsRequest extends SpeakeasyBase {
    /**
     * Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
     */
    endDate?: Date;
    /**
     * Only calculate statistics since this many minutes in the past. The default is 15 minutes.
     */
    minutes?: number;
    /**
     * A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. TaskRouter will calculate statistics on up to 10,000 Tasks/Reservations for any given threshold.
     */
    splitByWaitTime?: string;
    /**
     * Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    startDate?: Date;
    /**
     * Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
    /**
     * The SID of the TaskQueue for which to fetch statistics.
     */
    taskQueueSid: string;
    /**
     * The SID of the Workspace with the TaskQueue to fetch.
     */
    workspaceSid: string;
}
export declare class FetchTaskQueueCumulativeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics?: shared.TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics;
}
