import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiaryControllerGetAppointmentRequest extends SpeakeasyBase {
    /**
     * Appointment ID
     */
    appointmentID: string;
    /**
     * Company short name
     */
    shortName: string;
}
export declare class DiaryControllerGetAppointmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    diaryAppointmentModel?: shared.DiaryAppointmentModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
