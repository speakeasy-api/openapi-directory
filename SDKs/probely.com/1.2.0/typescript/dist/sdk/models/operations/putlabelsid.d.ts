import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutLabelsIdRequest extends SpeakeasyBase {
    labelInput: shared.LabelInput;
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class PutLabelsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PutLabelsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PutLabelsId400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutLabelsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Label object
     */
    label?: shared.Label;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    putLabelsId400ApplicationJSONObject?: PutLabelsId400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    putLabelsId401ApplicationJSONObject?: PutLabelsId401ApplicationJSON;
    /**
     * Not found
     */
    putLabelsId404ApplicationJSONObject?: PutLabelsId404ApplicationJSON;
}
