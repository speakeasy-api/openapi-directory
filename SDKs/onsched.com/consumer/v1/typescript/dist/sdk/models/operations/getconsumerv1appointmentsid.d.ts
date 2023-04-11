import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1AppointmentsIdRequest extends SpeakeasyBase {
    /**
     * id of appointment requested
     */
    id: string;
}
export declare class GetConsumerV1AppointmentsIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
