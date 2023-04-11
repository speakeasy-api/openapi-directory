import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteFileRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    id: string;
    /**
     * Automatically added
     */
    type: string;
    url?: string;
}
export declare class DeleteFileResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    /**
     * Successful response
     */
    fileDeleteResponse?: shared.FileDeleteResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
