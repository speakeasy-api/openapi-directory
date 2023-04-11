import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackageRequest extends SpeakeasyBase {
    /**
     * If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.
     */
    async?: number;
    /**
     * Project ID
     */
    id: number;
}
export declare class PackageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotLaunchedYet
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Packaged translation streamed.
     */
    package200ApplicationOctetStreamBinaryString?: Uint8Array;
}
