import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTaskQueueServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchTaskQueueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTaskQueueRequest extends SpeakeasyBase {
    /**
     * The SID of the TaskQueue resource to fetch.
     */
    sid: string;
    /**
     * The SID of the Workspace with the TaskQueue to fetch.
     */
    workspaceSid: string;
}
export declare class FetchTaskQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceTaskQueue?: shared.TaskrouterV1WorkspaceTaskQueue;
}
