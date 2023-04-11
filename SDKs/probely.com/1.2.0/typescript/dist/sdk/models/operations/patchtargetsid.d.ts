import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchTargetsIdRequest extends SpeakeasyBase {
    targetInput?: shared.TargetInput;
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class PatchTargetsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PatchTargetsId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchTargetsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PatchTargetsId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsIdResponse extends SpeakeasyBase {
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
    patchTargetsId400ApplicationJSONObject?: PatchTargetsId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    patchTargetsId401ApplicationJSONObject?: PatchTargetsId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    patchTargetsId403ApplicationJSONObject?: PatchTargetsId403ApplicationJSON;
    /**
     * Not found
     */
    patchTargetsId404ApplicationJSONObject?: PatchTargetsId404ApplicationJSON;
}
