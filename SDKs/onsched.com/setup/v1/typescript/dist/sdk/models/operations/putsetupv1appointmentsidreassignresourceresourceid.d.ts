import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1AppointmentsIdReassignResourceResourceIdRequest extends SpeakeasyBase {
    /**
     * id of appointment object
     */
    id: string;
    /**
     * id of target resource
     */
    resourceId: string;
}
export declare class PutSetupV1AppointmentsIdReassignResourceResourceIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    appointmentViewModel?: shared.AppointmentViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
