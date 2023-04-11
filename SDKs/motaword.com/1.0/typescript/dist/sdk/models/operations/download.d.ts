import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    id: number;
}
export declare class DownloadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotLaunchedYet
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Translation package streamed. The streamed file is always a ZIP file, except when the API client is configured for Drupal and Wordpress.
     */
    download200ApplicationOctetStreamBinaryString?: Uint8Array;
}
