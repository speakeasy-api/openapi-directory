import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest extends SpeakeasyBase {
    /**
     * CalendarId of calendar containing appointments
     */
    calendarId?: string;
    /**
     * YYYY-MM-DD, Appt range end date
     */
    endDate?: Date;
    /**
     * id of the original resource
     */
    id: string;
    /**
     * id of the target resource
     */
    resourceId: string;
    /**
     * YYYY-MM-DD, Appt range start date
     */
    startDate?: Date;
}
export declare class PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    appointmentViewModels?: shared.AppointmentViewModel[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
