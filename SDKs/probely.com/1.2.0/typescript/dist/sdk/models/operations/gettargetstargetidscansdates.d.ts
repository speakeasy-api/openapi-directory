import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdScansDatesRequest extends SpeakeasyBase {
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class GetTargetsTargetIdScansDates404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdScansDates401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScansDatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Dates for which there are scans
     */
    getTargetsTargetIdScansDates200ApplicationJSONDateStrings?: Date[];
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdScansDates401ApplicationJSONObject?: GetTargetsTargetIdScansDates401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdScansDates404ApplicationJSONObject?: GetTargetsTargetIdScansDates404ApplicationJSON;
}
