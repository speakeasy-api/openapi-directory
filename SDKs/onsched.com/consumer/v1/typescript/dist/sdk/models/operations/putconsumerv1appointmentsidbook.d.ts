import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutConsumerV1AppointmentsIdBookRequest extends SpeakeasyBase {
    appointmentBookModel?: shared.AppointmentBookModel;
    /**
     * appointment id to book
     */
    id: string;
}
export declare class PutConsumerV1AppointmentsIdBookResponse extends SpeakeasyBase {
    /**
     * Success
     */
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
