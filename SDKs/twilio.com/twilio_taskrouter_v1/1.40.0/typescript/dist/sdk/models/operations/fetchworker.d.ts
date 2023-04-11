import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWorkerServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWorkerRequest extends SpeakeasyBase {
    /**
     * The SID of the Worker resource to fetch.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Worker to fetch.
     */
    workspaceSid: string;
}
export declare class FetchWorkerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceWorker?: shared.TaskrouterV1WorkspaceWorker;
}
