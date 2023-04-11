import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteTaskQueueServerList: readonly ["https://taskrouter.twilio.com"];
export declare class DeleteTaskQueueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteTaskQueueRequest extends SpeakeasyBase {
    /**
     * The SID of the TaskQueue resource to delete.
     */
    sid: string;
    /**
     * The SID of the Workspace with the TaskQueue to delete.
     */
    workspaceSid: string;
}
export declare class DeleteTaskQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
