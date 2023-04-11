import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTargetsIdRequest extends SpeakeasyBase {
    targetInput?: shared.TargetInput;
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class PutTargetsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Not allowed to perform operation
 */
export declare class PutTargetsId403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutTargetsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PutTargetsId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutTargetsIdResponse extends SpeakeasyBase {
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
    putTargetsId400ApplicationJSONObject?: PutTargetsId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    putTargetsId401ApplicationJSONObject?: PutTargetsId401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    putTargetsId403ApplicationJSONObject?: PutTargetsId403ApplicationJSON;
    /**
     * Not found
     */
    putTargetsId404ApplicationJSONObject?: PutTargetsId404ApplicationJSON;
}
