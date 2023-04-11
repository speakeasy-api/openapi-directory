import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdScheduledscansExpandedRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page
     */
    length?: number;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class GetTargetsTargetIdScheduledscansExpanded404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Next scheduled scans
 */
export declare class GetTargetsTargetIdScheduledscansExpanded200ApplicationJSON extends SpeakeasyBase {
    /**
     * Scheduled scan objects
     */
    results?: shared.Scheduled[];
}
export declare class GetTargetsTargetIdScheduledscansExpandedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Next scheduled scans
     */
    getTargetsTargetIdScheduledscansExpanded200ApplicationJSONObject?: GetTargetsTargetIdScheduledscansExpanded200ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdScheduledscansExpanded404ApplicationJSONObject?: GetTargetsTargetIdScheduledscansExpanded404ApplicationJSON;
}
