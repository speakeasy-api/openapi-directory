import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdScheduledscansIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class GetTargetsTargetIdScheduledscansId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetTargetsTargetIdScheduledscansId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdScheduledscansIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Scheduled scan object
     */
    scheduled?: shared.Scheduled;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getTargetsTargetIdScheduledscansId401ApplicationJSONObject?: GetTargetsTargetIdScheduledscansId401ApplicationJSON;
    /**
     * Not found
     */
    getTargetsTargetIdScheduledscansId404ApplicationJSONObject?: GetTargetsTargetIdScheduledscansId404ApplicationJSON;
}
