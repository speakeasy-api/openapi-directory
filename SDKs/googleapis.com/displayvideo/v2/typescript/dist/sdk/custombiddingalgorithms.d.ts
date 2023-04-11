import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomBiddingAlgorithms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
     */
    displayvideoCustomBiddingAlgorithmsCreate(req: operations.DisplayvideoCustomBiddingAlgorithmsCreateRequest, security: operations.DisplayvideoCustomBiddingAlgorithmsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsCreateResponse>;
    /**
     * Gets a custom bidding algorithm.
     */
    displayvideoCustomBiddingAlgorithmsGet(req: operations.DisplayvideoCustomBiddingAlgorithmsGetRequest, security: operations.DisplayvideoCustomBiddingAlgorithmsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsGetResponse>;
    /**
     * Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
     */
    displayvideoCustomBiddingAlgorithmsList(req: operations.DisplayvideoCustomBiddingAlgorithmsListRequest, security: operations.DisplayvideoCustomBiddingAlgorithmsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsListResponse>;
    /**
     * Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.
     */
    displayvideoCustomBiddingAlgorithmsPatch(req: operations.DisplayvideoCustomBiddingAlgorithmsPatchRequest, security: operations.DisplayvideoCustomBiddingAlgorithmsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsPatchResponse>;
    /**
     * Creates a new custom bidding script. Returns the newly created script if successful.
     */
    displayvideoCustomBiddingAlgorithmsScriptsCreate(req: operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest, security: operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse>;
    /**
     * Gets a custom bidding script.
     */
    displayvideoCustomBiddingAlgorithmsScriptsGet(req: operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest, security: operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse>;
    /**
     * Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
     */
    displayvideoCustomBiddingAlgorithmsScriptsList(req: operations.DisplayvideoCustomBiddingAlgorithmsScriptsListRequest, security: operations.DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsScriptsListResponse>;
    /**
     * Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.
     */
    displayvideoCustomBiddingAlgorithmsUploadScript(req: operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest, security: operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse>;
}
