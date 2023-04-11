import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackageProjectTranslationMemoryRequest extends SpeakeasyBase {
    /**
     * If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.
     */
    async?: number;
    /**
     * Translation Memory file format
     */
    format?: string;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class PackageProjectTranslationMemoryResponse extends SpeakeasyBase {
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
    packageProjectTranslationMemory200ApplicationXMLBinaryString?: Uint8Array;
}
