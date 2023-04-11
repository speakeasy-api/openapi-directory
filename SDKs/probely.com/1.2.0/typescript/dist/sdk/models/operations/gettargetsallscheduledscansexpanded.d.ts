import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsAllScheduledscansExpandedRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page
     */
    length?: number;
}
/**
 * Not found
 */
export declare class GetTargetsAllScheduledscansExpanded404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Next scheduled scans
 */
export declare class GetTargetsAllScheduledscansExpanded200ApplicationJSON extends SpeakeasyBase {
    /**
     * Scheduled scan objects
     */
    results?: shared.Scheduled[];
}
export declare class GetTargetsAllScheduledscansExpandedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Next scheduled scans
     */
    getTargetsAllScheduledscansExpanded200ApplicationJSONObject?: GetTargetsAllScheduledscansExpanded200ApplicationJSON;
    /**
     * Not found
     */
    getTargetsAllScheduledscansExpanded404ApplicationJSONObject?: GetTargetsAllScheduledscansExpanded404ApplicationJSON;
}
