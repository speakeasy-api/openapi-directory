import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackageLanguageRequest extends SpeakeasyBase {
    /**
     * If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.
     */
    async?: number;
    /**
     * Project ID
     */
    id: number;
    /**
     * Language code. You can package the translation of only a specific language.
     */
    language: string;
}
export declare class PackageLanguageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotLaunchedYet
     */
    error?: shared.ErrorT;
    /**
     * Packaging status and tracking code. With the package key, you can track the progress of translation packaging.Also packaged translation streamed.
     */
    package?: shared.Package;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Packaging status and tracking code. With the package key, you can track the progress of translation packaging.Also packaged translation streamed.
     */
    packageLanguage200ApplicationOctetStreamBinaryString?: Uint8Array;
}
