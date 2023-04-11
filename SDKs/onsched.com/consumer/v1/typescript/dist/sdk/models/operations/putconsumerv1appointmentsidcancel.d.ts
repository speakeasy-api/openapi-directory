import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutConsumerV1AppointmentsIdCancelRequest extends SpeakeasyBase {
    /**
     * appointment id to cancel
     */
    id: string;
}
export declare class PutConsumerV1AppointmentsIdCancelResponse extends SpeakeasyBase {
    /**
     * Success
     */
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
