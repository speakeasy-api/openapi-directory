import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteConsumerV1AppointmentsIdRequest extends SpeakeasyBase {
    /**
     * appointment id to delete
     */
    id: string;
}
export declare class DeleteConsumerV1AppointmentsIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
