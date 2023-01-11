import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["https://westcentralus.api.cognitive.microsoft.com/vision/v2.1", "https://{Endpoint}/vision/v2.1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * batchReadFile - Use this interface to get the result of a Read operation, employing the state-of-the-art Optical Character Recognition (OCR) algorithms optimized for text-heavy documents. When you use the Read File interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your 'GetReadOperationResult' operation to access OCR results.​
    **/
    batchReadFile(req: operations.BatchReadFileRequest, config?: AxiosRequestConfig): Promise<operations.BatchReadFileResponse>;
    /**
     * getReadOperationResult - This interface is used for getting OCR results of Read operation. The URL to this interface should be retrieved from 'Operation-Location' field returned from Batch Read File interface.
    **/
    getReadOperationResult(req: operations.GetReadOperationResultRequest, config?: AxiosRequestConfig): Promise<operations.GetReadOperationResultResponse>;
    /**
     * getTextOperationResult - This interface is used for getting text operation result. The URL to this interface should be retrieved from 'Operation-Location' field returned from Recognize Text interface.
    **/
    getTextOperationResult(req: operations.GetTextOperationResultRequest, config?: AxiosRequestConfig): Promise<operations.GetTextOperationResultResponse>;
    /**
     * recognizeText - Recognize Text operation. When you use the Recognize Text interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your Get Recognize Text Operation Result operation.
    **/
    recognizeText(req: operations.RecognizeTextRequest, config?: AxiosRequestConfig): Promise<operations.RecognizeTextResponse>;
}
