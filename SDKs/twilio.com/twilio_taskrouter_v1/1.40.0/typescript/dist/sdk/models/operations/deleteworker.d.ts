import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteWorkerServerList: readonly ["https://taskrouter.twilio.com"];
export declare class DeleteWorkerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteWorkerRequest extends SpeakeasyBase {
    /**
     * The If-Match HTTP request header
     */
    ifMatch?: string;
    /**
     * The SID of the Worker resource to delete.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Worker to delete.
     */
    workspaceSid: string;
}
export declare class DeleteWorkerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
