import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiaryControllerPostAppointmentJsonRequest extends SpeakeasyBase {
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
export declare class DiaryControllerPostAppointmentJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    diaryControllerPostAppointmentJSON200ApplicationJSONString?: string;
    /**
     * OK
     */
    diaryControllerPostAppointmentJson200ApplicationXMLString?: string;
    /**
     * OK
     */
    diaryControllerPostAppointmentJSON200TextJSONString?: string;
    /**
     * OK
     */
    diaryControllerPostAppointmentJson200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
