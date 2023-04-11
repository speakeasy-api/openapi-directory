import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DiaryControllerPutAppointmentRawRequest extends SpeakeasyBase {
    /**
     * Sales or Lettings property?
     */
    allowMarketingCorrespondence?: boolean;
    /**
     * The appointment details model
     */
    requestBody: Uint8Array;
    /**
     * The unique appointment id
     */
    appointmentID: string;
    /**
     * Sales or Lettings property?
     */
    lettings?: boolean;
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class DiaryControllerPutAppointmentRawResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    diaryControllerPutAppointmentRaw200ApplicationJSONString?: string;
    /**
     * OK
     */
    diaryControllerPutAppointmentRaw200ApplicationXMLString?: string;
    /**
     * OK
     */
    diaryControllerPutAppointmentRaw200TextJSONString?: string;
    /**
     * OK
     */
    diaryControllerPutAppointmentRaw200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
