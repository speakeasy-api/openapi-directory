import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTaskServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchTaskSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTaskRequest extends SpeakeasyBase {
    /**
     * The SID of the Task resource to fetch.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Task to fetch.
     */
    workspaceSid: string;
}
export declare class FetchTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceTask?: shared.TaskrouterV1WorkspaceTask;
}
