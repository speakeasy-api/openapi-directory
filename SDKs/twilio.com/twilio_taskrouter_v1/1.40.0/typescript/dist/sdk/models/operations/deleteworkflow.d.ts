import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteWorkflowServerList: readonly ["https://taskrouter.twilio.com"];
export declare class DeleteWorkflowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteWorkflowRequest extends SpeakeasyBase {
    /**
     * The SID of the Workflow resource to delete.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Workflow to delete.
     */
    workspaceSid: string;
}
export declare class DeleteWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
