import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWorkersCumulativeStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkersCumulativeStatisticsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWorkersCumulativeStatisticsRequest extends SpeakeasyBase {
    /**
     * Only calculate statistics from this date and time and earlier, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    endDate?: Date;
    /**
     * Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
     */
    minutes?: number;
    /**
     * Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    startDate?: Date;
    /**
     * Only calculate cumulative statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
    /**
     * The SID of the Workspace with the resource to fetch.
     */
    workspaceSid: string;
}
export declare class FetchWorkersCumulativeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceWorkerWorkersCumulativeStatistics?: shared.TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics;
}
