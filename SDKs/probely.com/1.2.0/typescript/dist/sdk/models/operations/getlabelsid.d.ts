import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLabelsIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class GetLabelsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetLabelsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetLabelsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Label object
     */
    label?: shared.Label;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getLabelsId401ApplicationJSONObject?: GetLabelsId401ApplicationJSON;
    /**
     * Not found
     */
    getLabelsId404ApplicationJSONObject?: GetLabelsId404ApplicationJSON;
}
