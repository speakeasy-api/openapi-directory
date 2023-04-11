import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTargetsTargetIdScheduledscansIdRequestBody extends SpeakeasyBase {
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
export declare class PutTargetsTargetIdScheduledscansIdRequest extends SpeakeasyBase {
    requestBody: PutTargetsTargetIdScheduledscansIdRequestBody;
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
export declare class PutTargetsTargetIdScheduledscansId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PutTargetsTargetIdScheduledscansId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutTargetsTargetIdScheduledscansId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PutTargetsTargetIdScheduledscansId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutTargetsTargetIdScheduledscansIdResponse extends SpeakeasyBase {
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
    putTargetsTargetIdScheduledscansId400ApplicationJSONObject?: PutTargetsTargetIdScheduledscansId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    putTargetsTargetIdScheduledscansId401ApplicationJSONObject?: PutTargetsTargetIdScheduledscansId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putTargetsTargetIdScheduledscansId403ApplicationJSONObject?: PutTargetsTargetIdScheduledscansId403ApplicationJSON;
    /**
     * Not found
     */
    putTargetsTargetIdScheduledscansId404ApplicationJSONObject?: PutTargetsTargetIdScheduledscansId404ApplicationJSON;
}
