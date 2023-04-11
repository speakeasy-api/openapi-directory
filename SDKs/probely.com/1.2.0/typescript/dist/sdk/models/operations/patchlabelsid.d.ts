import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchLabelsIdRequest extends SpeakeasyBase {
    labelInput: shared.LabelInput;
    /**
     * Object Id
     */
    id: string;
}
/**
 * Not found
 */
export declare class PatchLabelsId404ApplicationJSON extends SpeakeasyBase {
    /**
     * Not found.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class PatchLabelsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchLabelsIdResponse extends SpeakeasyBase {
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
    patchLabelsId401ApplicationJSONObject?: PatchLabelsId401ApplicationJSON;
    /**
     * Not found
     */
    patchLabelsId404ApplicationJSONObject?: PatchLabelsId404ApplicationJSON;
}
