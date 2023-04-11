import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiaryControllerPutAppointmentJsonRequest extends SpeakeasyBase {
    /**
     * Sales or Lettings property?
     */
    allowMarketingCorrespondence?: boolean;
    /**
     * The appointment details model
     */
    diaryAppointmentDetails: shared.DiaryAppointmentDetails;
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
export declare class DiaryControllerPutAppointmentJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    diaryControllerPutAppointmentJSON200ApplicationJSONString?: string;
    /**
     * OK
     */
    diaryControllerPutAppointmentJson200ApplicationXMLString?: string;
    /**
     * OK
     */
    diaryControllerPutAppointmentJSON200TextJSONString?: string;
    /**
     * OK
     */
    diaryControllerPutAppointmentJson200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
