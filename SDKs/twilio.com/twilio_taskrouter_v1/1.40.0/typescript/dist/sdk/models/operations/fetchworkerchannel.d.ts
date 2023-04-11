import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWorkerChannelServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkerChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWorkerChannelRequest extends SpeakeasyBase {
    /**
     * The SID of the WorkerChannel to fetch.
     */
    sid: string;
    /**
     * The SID of the Worker with the WorkerChannel to fetch.
     */
    workerSid: string;
    /**
     * The SID of the Workspace with the WorkerChannel to fetch.
     */
    workspaceSid: string;
}
export declare class FetchWorkerChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceWorkerWorkerChannel?: shared.TaskrouterV1WorkspaceWorkerWorkerChannel;
}
