import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DiaryControllerCancelAppointmentRequest extends SpeakeasyBase {
    /**
     * The unique appointment id
     */
    appointmentID: string;
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class DiaryControllerCancelAppointmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    diaryControllerCancelAppointment200ApplicationJSONString?: string;
    /**
     * OK
     */
    diaryControllerCancelAppointment200ApplicationXMLString?: string;
    /**
     * OK
     */
    diaryControllerCancelAppointment200TextJSONString?: string;
    /**
     * OK
     */
    diaryControllerCancelAppointment200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
