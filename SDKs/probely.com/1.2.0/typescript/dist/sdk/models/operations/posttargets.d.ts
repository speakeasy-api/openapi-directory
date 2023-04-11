import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class PostTargets500ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PostTargets403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargets401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostTargets400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Target object
     */
    target?: shared.Target;
    /**
     * Bad Request
     */
    postTargets400ApplicationJSONObject?: PostTargets400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postTargets401ApplicationJSONObject?: PostTargets401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postTargets403ApplicationJSONObject?: PostTargets403ApplicationJSON;
    /**
     * Internal server error
     */
    postTargets500ApplicationJSONObject?: PostTargets500ApplicationJSON;
}
