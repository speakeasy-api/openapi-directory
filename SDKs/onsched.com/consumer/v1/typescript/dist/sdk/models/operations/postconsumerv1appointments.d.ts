import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostConsumerV1AppointmentsRequest extends SpeakeasyBase {
    appointmentInitialModel?: shared.AppointmentInitialModel;
    /**
     * Options are "BK", "RS" or "IN"
     */
    completeBooking?: string;
}
export declare class PostConsumerV1AppointmentsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    appointmentInitialViewModel?: shared.AppointmentInitialViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
