import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTargetsTargetIdKeysRequest extends SpeakeasyBase {
    apiKeyInput: shared.APIKeyInput;
    /**
     * Target id
     */
    targetId: string;
}
/**
 * Not found
 */
export declare class PostTargetsTargetIdKeys404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PostTargetsTargetIdKeys403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PostTargetsTargetIdKeys401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostTargetsTargetIdKeys400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsTargetIdKeysResponse extends SpeakeasyBase {
    /**
     * API Key object
     */
    apiKey?: shared.APIKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    postTargetsTargetIdKeys400ApplicationJSONObject?: PostTargetsTargetIdKeys400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postTargetsTargetIdKeys401ApplicationJSONObject?: PostTargetsTargetIdKeys401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    postTargetsTargetIdKeys403ApplicationJSONObject?: PostTargetsTargetIdKeys403ApplicationJSON;
    /**
     * Not found
     */
    postTargetsTargetIdKeys404ApplicationJSONObject?: PostTargetsTargetIdKeys404ApplicationJSON;
}
