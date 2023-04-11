import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListWorkerReservationServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListWorkerReservationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListWorkerReservationRequest extends SpeakeasyBase {
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
     * Returns the list of reservations for a worker with a specified ReservationStatus. Can be: `pending`, `accepted`, `rejected`, `timeout`, `canceled`, or `rescinded`.
     */
    reservationStatus?: shared.WorkerReservationEnumStatusEnum;
    /**
     * The SID of the reserved Worker resource with the WorkerReservation resources to read.
     */
    workerSid: string;
    /**
     * The SID of the Workspace with the WorkerReservation resources to read.
     */
    workspaceSid: string;
}
export declare class ListWorkerReservationListWorkerReservationResponseMeta extends SpeakeasyBase {
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
export declare class ListWorkerReservationListWorkerReservationResponse extends SpeakeasyBase {
    meta?: ListWorkerReservationListWorkerReservationResponseMeta;
    reservations?: shared.TaskrouterV1WorkspaceWorkerWorkerReservation[];
}
export declare class ListWorkerReservationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listWorkerReservationResponse?: ListWorkerReservationListWorkerReservationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
