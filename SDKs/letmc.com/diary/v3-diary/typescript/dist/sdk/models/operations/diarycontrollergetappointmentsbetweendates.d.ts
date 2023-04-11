import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiaryControllerGetAppointmentsBetweenDatesRequest extends SpeakeasyBase {
    /**
     * The appointment IDs to search for
     */
    appointmentTypesToSearch: string[];
    /**
     * The unique ID of the Branch
     */
    branchID: string;
    /**
     * The maximum number of items to return (up to 1000 per request)
     */
    count: number;
    /**
     * The search to date
     */
    endDate: Date;
    /**
     * The index of the first item to return
     */
    offset: number;
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The search from date
     */
    startDate: Date;
}
export declare class DiaryControllerGetAppointmentsBetweenDatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    diaryAppointmentModelResults?: shared.DiaryAppointmentModelResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
