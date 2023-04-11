import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWorkflowServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkflowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWorkflowRequest extends SpeakeasyBase {
    /**
     * The SID of the Workflow resource to fetch.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Workflow to fetch.
     */
    workspaceSid: string;
}
export declare class FetchWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceWorkflow?: shared.TaskrouterV1WorkspaceWorkflow;
}
