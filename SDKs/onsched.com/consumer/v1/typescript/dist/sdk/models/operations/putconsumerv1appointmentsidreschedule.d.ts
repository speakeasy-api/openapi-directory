import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutConsumerV1AppointmentsIdRescheduleRequest extends SpeakeasyBase {
    appointmentRescheduleModel?: shared.AppointmentRescheduleModel;
    /**
     * appointment id to reschedule
     */
    id: string;
}
export declare class PutConsumerV1AppointmentsIdRescheduleResponse extends SpeakeasyBase {
    /**
     * Success
     */
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
