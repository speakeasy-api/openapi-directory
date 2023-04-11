import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWorkflowRealTimeStatisticsServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkflowRealTimeStatisticsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWorkflowRealTimeStatisticsRequest extends SpeakeasyBase {
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
export declare class FetchWorkflowRealTimeStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics?: shared.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics;
}
