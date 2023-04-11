import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadLanguageRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    id: number;
    /**
     * Language code. You can download the translation of only a specific language.
     */
    language: string;
}
export declare class DownloadLanguageResponse extends SpeakeasyBase {
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
    downloadLanguage200ApplicationOctetStreamBinaryString?: Uint8Array;
}
