import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Not allowed to perform operation
 */
export declare class PostTargetsActivate403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsActivate401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostTargetsActivate400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsActivateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    postTargetsActivate400ApplicationJSONObject?: PostTargetsActivate400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postTargetsActivate401ApplicationJSONObject?: PostTargetsActivate401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postTargetsActivate403ApplicationJSONObject?: PostTargetsActivate403ApplicationJSON;
    /**
     * Target id list
     */
    targetIds?: string[];
}
