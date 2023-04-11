import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTaskReservationServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchTaskReservationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTaskReservationRequest extends SpeakeasyBase {
    /**
     * The SID of the TaskReservation resource to fetch.
     */
    sid: string;
    /**
     * The SID of the reserved Task resource with the TaskReservation resource to fetch.
     */
    taskSid: string;
    /**
     * The SID of the Workspace with the TaskReservation resource to fetch.
     */
    workspaceSid: string;
}
export declare class FetchTaskReservationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceTaskTaskReservation?: shared.TaskrouterV1WorkspaceTaskTaskReservation;
}
