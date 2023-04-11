import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiaryControllerGetAllocationsRequest extends SpeakeasyBase {
    /**
     * The unique appointment type identifier
     */
    appointmentType: string;
    /**
     * Branch ID to check appointments (required if no property submitted)
     */
    branchID?: string;
    /**
     * Sales or Lettings property?
     */
    lettings?: boolean;
    /**
     * The date to search from
     */
    preferredDate: Date;
    /**
     * The unique property identifier (Sales or Lettings) determines branch and property type
     */
    propertyIdentifier?: string;
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class DiaryControllerGetAllocationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    diaryBookingModels?: shared.DiaryBookingModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
