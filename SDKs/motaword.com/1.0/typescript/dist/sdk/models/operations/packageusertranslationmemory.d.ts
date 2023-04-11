import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackageUserTranslationMemoryRequest extends SpeakeasyBase {
    /**
     * If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.
     */
    async?: number;
    /**
     * If you don't need us to email the TMX, set this to '0'. Default is 1.
     */
    email?: number;
    /**
     * Source Language Code
     */
    languageCode: string;
}
export declare class PackageUserTranslationMemoryResponse extends SpeakeasyBase {
    /**
     * Response in TMX or async request
     */
    asyncOperationStatus?: shared.AsyncOperationStatus;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response in TMX or async request
     */
    packageUserTranslationMemory200ApplicationXMLBinaryString?: Uint8Array;
}
