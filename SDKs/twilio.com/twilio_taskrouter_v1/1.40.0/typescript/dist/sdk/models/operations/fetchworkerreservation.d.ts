import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWorkerReservationServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkerReservationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWorkerReservationRequest extends SpeakeasyBase {
    /**
     * The SID of the WorkerReservation resource to fetch.
     */
    sid: string;
    /**
     * The SID of the reserved Worker resource with the WorkerReservation resource to fetch.
     */
    workerSid: string;
    /**
     * The SID of the Workspace with the WorkerReservation resource to fetch.
     */
    workspaceSid: string;
}
export declare class FetchWorkerReservationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceWorkerWorkerReservation?: shared.TaskrouterV1WorkspaceWorkerWorkerReservation;
}
