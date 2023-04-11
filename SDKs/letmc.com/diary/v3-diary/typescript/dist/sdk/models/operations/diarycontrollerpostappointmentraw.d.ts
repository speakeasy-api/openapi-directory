import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DiaryControllerPostAppointmentRawRequest extends SpeakeasyBase {
    /**
     * The appointment details model
     */
    requestBody: Uint8Array;
    /**
     * Sales or Lettings property?
     */
    lettings?: boolean;
    /**
     * The unique property identifier (Sales or Lettings)
     */
    propertyIdentifier: string[];
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class DiaryControllerPostAppointmentRawResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    diaryControllerPostAppointmentRaw200ApplicationJSONString?: string;
    /**
     * OK
     */
    diaryControllerPostAppointmentRaw200ApplicationXMLString?: string;
    /**
     * OK
     */
    diaryControllerPostAppointmentRaw200TextJSONString?: string;
    /**
     * OK
     */
    diaryControllerPostAppointmentRaw200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
