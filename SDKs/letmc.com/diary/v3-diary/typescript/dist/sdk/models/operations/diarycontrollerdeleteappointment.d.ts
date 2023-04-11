import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DiaryControllerDeleteAppointmentRequest extends SpeakeasyBase {
    /**
     * The unique appointment id
     */
    appointmentID: string;
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class DiaryControllerDeleteAppointmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    diaryControllerDeleteAppointment200ApplicationJSONString?: string;
    /**
     * OK
     */
    diaryControllerDeleteAppointment200ApplicationXMLString?: string;
    /**
     * OK
     */
    diaryControllerDeleteAppointment200TextJSONString?: string;
    /**
     * OK
     */
    diaryControllerDeleteAppointment200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
