import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTargetsTargetIdScheduledscansIdRequestBody extends SpeakeasyBase {
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
export declare class PatchTargetsTargetIdScheduledscansIdRequest extends SpeakeasyBase {
    requestBody: PatchTargetsTargetIdScheduledscansIdRequestBody;
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
export declare class PatchTargetsTargetIdScheduledscansId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PatchTargetsTargetIdScheduledscansId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchTargetsTargetIdScheduledscansId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PatchTargetsTargetIdScheduledscansId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsTargetIdScheduledscansIdResponse extends SpeakeasyBase {
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
    patchTargetsTargetIdScheduledscansId400ApplicationJSONObject?: PatchTargetsTargetIdScheduledscansId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    patchTargetsTargetIdScheduledscansId401ApplicationJSONObject?: PatchTargetsTargetIdScheduledscansId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchTargetsTargetIdScheduledscansId403ApplicationJSONObject?: PatchTargetsTargetIdScheduledscansId403ApplicationJSON;
    /**
     * Not found
     */
    patchTargetsTargetIdScheduledscansId404ApplicationJSONObject?: PatchTargetsTargetIdScheduledscansId404ApplicationJSON;
}
