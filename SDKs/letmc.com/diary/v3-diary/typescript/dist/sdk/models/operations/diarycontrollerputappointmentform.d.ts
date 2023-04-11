import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiaryControllerPutAppointmentFormRequest extends SpeakeasyBase {
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
export declare class DiaryControllerPutAppointmentFormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    diaryControllerPutAppointmentForm200ApplicationJSONString?: string;
    /**
     * OK
     */
    diaryControllerPutAppointmentForm200ApplicationXMLString?: string;
    /**
     * OK
     */
    diaryControllerPutAppointmentForm200TextJSONString?: string;
    /**
     * OK
     */
    diaryControllerPutAppointmentForm200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
