import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiaryControllerGetAppointmentTypesRequest extends SpeakeasyBase {
    /**
     * The maximum number of items to return (up to 1000 per request)
     */
    count: number;
    /**
     * The index of the first item to return
     */
    offset: number;
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class DiaryControllerGetAppointmentTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    diaryAppointmentTypeModelResults?: shared.DiaryAppointmentTypeModelResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
