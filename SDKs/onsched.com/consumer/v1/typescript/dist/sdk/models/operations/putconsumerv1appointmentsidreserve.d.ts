import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutConsumerV1AppointmentsIdReserveRequest extends SpeakeasyBase {
    appointmentReserveModel?: shared.AppointmentReserveModel;
    /**
     * appointment id to reserve
     */
    id: string;
    sendNotifications?: boolean;
}
export declare class PutConsumerV1AppointmentsIdReserveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
