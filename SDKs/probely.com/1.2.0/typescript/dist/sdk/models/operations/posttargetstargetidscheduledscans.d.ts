import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTargetsTargetIdScheduledscansRequestBody extends SpeakeasyBase {
    /**
     * Date time of next scan
     */
    dateTime: Date;
    /**
     * Scan recurrence:
     *
     * @remarks
     *   * d - daily
     *   * w - weekly
     *   * m - monthly
     *   * q - quarterly
     *   * '' - no recurrence
     *
     */
    recurrence?: shared.RecurrenceEnum;
}
export declare class PostTargetsTargetIdScheduledscansRequest extends SpeakeasyBase {
    requestBody: PostTargetsTargetIdScheduledscansRequestBody;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PostTargetsTargetIdScheduledscans404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PostTargetsTargetIdScheduledscans403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsTargetIdScheduledscans401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostTargetsTargetIdScheduledscans400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsTargetIdScheduledscansResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Scheduled scan object
     */
    scheduled?: shared.Scheduled;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    postTargetsTargetIdScheduledscans400ApplicationJSONObject?: PostTargetsTargetIdScheduledscans400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postTargetsTargetIdScheduledscans401ApplicationJSONObject?: PostTargetsTargetIdScheduledscans401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postTargetsTargetIdScheduledscans403ApplicationJSONObject?: PostTargetsTargetIdScheduledscans403ApplicationJSON;
    /**
     * Not found
     */
    postTargetsTargetIdScheduledscans404ApplicationJSONObject?: PostTargetsTargetIdScheduledscans404ApplicationJSON;
}
