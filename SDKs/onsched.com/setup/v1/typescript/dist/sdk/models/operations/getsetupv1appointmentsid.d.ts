import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1AppointmentsIdRequest extends SpeakeasyBase {
    /**
     * id of appointment object
     */
    id: string;
}
export declare class GetSetupV1AppointmentsIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
