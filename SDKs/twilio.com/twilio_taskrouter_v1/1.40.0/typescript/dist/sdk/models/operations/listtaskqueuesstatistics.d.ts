import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTaskQueuesStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListTaskQueuesStatisticsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTaskQueuesStatisticsRequest extends SpeakeasyBase {
    /**
     * Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
     */
    endDate?: Date;
    /**
     * The `friendly_name` of the TaskQueue statistics to read.
     */
    friendlyName?: string;
    /**
     * Only calculate statistics since this many minutes in the past. The default is 15 minutes.
     */
    minutes?: number;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed.
     */
    splitByWaitTime?: string;
    /**
     * Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    startDate?: Date;
    /**
     * Only calculate statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
    /**
     * The SID of the Workspace with the TaskQueues to read.
     */
    workspaceSid: string;
}
export declare class ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse extends SpeakeasyBase {
    meta?: ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta;
    taskQueuesStatistics?: shared.TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics[];
}
export declare class ListTaskQueuesStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTaskQueuesStatisticsResponse?: ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
