import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiaryControllerPostAppointmentFormRequest extends SpeakeasyBase {
    /**
     * The appointment details model
     */
    diaryAppointmentDetails: shared.DiaryAppointmentDetails;
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
export declare class DiaryControllerPostAppointmentFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    diaryControllerPostAppointmentForm200ApplicationJSONString?: string;
    /**
     * OK
     */
    diaryControllerPostAppointmentForm200ApplicationXMLString?: string;
    /**
     * OK
     */
    diaryControllerPostAppointmentForm200TextJSONString?: string;
    /**
     * OK
     */
    diaryControllerPostAppointmentForm200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
