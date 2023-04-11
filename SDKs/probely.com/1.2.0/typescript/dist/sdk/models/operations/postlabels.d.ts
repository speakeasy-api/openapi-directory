import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Access token is missing or invalid
 */
export declare class PostLabels401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
/**
 * Bad Request
 */
export declare class PostLabels400ApplicationJSON extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostLabelsResponse extends SpeakeasyBase {
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
    postLabels400ApplicationJSONObject?: PostLabels400ApplicationJSON;
    /**
     * Access token is missing or invalid
     */
    postLabels401ApplicationJSONObject?: PostLabels401ApplicationJSON;
}
