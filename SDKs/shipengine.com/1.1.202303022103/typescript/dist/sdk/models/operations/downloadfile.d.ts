import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadFileRequest extends SpeakeasyBase {
    dir: string;
    download?: string;
    filename: string;
    rotation?: number;
    subdir: string;
}
export declare class DownloadFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was a success
     */
    downloadFilePdfResponseBody?: Uint8Array;
    /**
     * The request was a success
     */
    downloadFilePngResponseBody?: Uint8Array;
    /**
     * The request was a success
     */
    downloadFileZplResponseBody?: Uint8Array;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
