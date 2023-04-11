import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTaskReservationServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListTaskReservationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTaskReservationRequest extends SpeakeasyBase {
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * Returns the list of reservations for a task with a specified ReservationStatus.  Can be: `pending`, `accepted`, `rejected`, or `timeout`.
     */
    reservationStatus?: shared.TaskReservationEnumStatusEnum;
    /**
     * The SID of the reserved Task resource with the TaskReservation resources to read.
     */
    taskSid: string;
    /**
     * The SID of the reserved Worker resource to read.
     */
    workerSid?: string;
    /**
     * The SID of the Workspace with the TaskReservation resources to read.
     */
    workspaceSid: string;
}
export declare class ListTaskReservationListTaskReservationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListTaskReservationListTaskReservationResponse extends SpeakeasyBase {
    meta?: ListTaskReservationListTaskReservationResponseMeta;
    reservations?: shared.TaskrouterV1WorkspaceTaskTaskReservation[];
}
export declare class ListTaskReservationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTaskReservationResponse?: ListTaskReservationListTaskReservationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
