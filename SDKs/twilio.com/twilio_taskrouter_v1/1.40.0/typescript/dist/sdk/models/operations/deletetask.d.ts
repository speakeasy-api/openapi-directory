import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteTaskServerList: readonly ["https://taskrouter.twilio.com"];
export declare class DeleteTaskSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteTaskRequest extends SpeakeasyBase {
    /**
     * If provided, deletes this Task if (and only if) the [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) header of the Task matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
     */
    ifMatch?: string;
    /**
     * The SID of the Task resource to delete.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Task to delete.
     */
    workspaceSid: string;
}
export declare class DeleteTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
