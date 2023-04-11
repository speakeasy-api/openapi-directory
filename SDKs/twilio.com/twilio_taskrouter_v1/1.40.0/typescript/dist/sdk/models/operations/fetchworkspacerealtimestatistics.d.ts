import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWorkspaceRealTimeStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkspaceRealTimeStatisticsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWorkspaceRealTimeStatisticsRequest extends SpeakeasyBase {
    /**
     * Only calculate real-time statistics on this TaskChannel. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
    /**
     * The SID of the Workspace to fetch.
     */
    workspaceSid: string;
}
export declare class FetchWorkspaceRealTimeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceWorkspaceRealTimeStatistics?: shared.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics;
}
