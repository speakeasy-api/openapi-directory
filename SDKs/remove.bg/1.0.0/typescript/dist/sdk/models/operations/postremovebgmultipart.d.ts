import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRemovebgMultipart400WildcardErrors extends SpeakeasyBase {
    /**
     * Error code
     */
    code?: string;
    /**
     * Detailed description of the error
     */
    detail?: string;
    /**
     * Error message
     */
    title?: string;
}
/**
 * Error: Invalid parameters or input file unprocessable (no credits charged)
 */
export declare class PostRemovebgMultipart400Wildcard extends SpeakeasyBase {
    errors?: PostRemovebgMultipart400WildcardErrors[];
}
export declare class PostRemovebgMultipartResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Image background removed
     */
    removeBgJsonResponse?: shared.RemoveBgJsonResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Image background removed
     */
    postRemovebgMultipart200ImageWildcardBinaryString?: Uint8Array;
}
