import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTaskQueueRealTimeStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchTaskQueueRealTimeStatisticsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTaskQueueRealTimeStatisticsRequest extends SpeakeasyBase {
    /**
     * The TaskChannel for which to fetch statistics. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
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
export declare class FetchTaskQueueRealTimeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics?: shared.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics;
}
