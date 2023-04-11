import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Agreements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Accept an end-user agreement via the API
     */
    acceptEUA(req: operations.AcceptEUARequest, config?: AxiosRequestConfig): Promise<operations.AcceptEUAResponse>;
    /**
     * Create an end user agreement
     */
    createEUAV2(req: shared.EndUserAgreementRequest, config?: AxiosRequestConfig): Promise<operations.CreateEuav2Response>;
    /**
     * Delete an end user agreement
     */
    deleteEUAByIdV2(req: operations.DeleteEUAByIdV2Request, config?: AxiosRequestConfig): Promise<operations.DeleteEUAByIdV2Response>;
    /**
     * Retrieve end user agreement by ID
     */
    retrieveEUAByIdV2(req: operations.RetrieveEUAByIdV2Request, config?: AxiosRequestConfig): Promise<operations.RetrieveEUAByIdV2Response>;
    /**
     * Retrieve all end user agreements belonging to the company
     */
    retrieveAllEUAsForAnEndUserV2(req: operations.RetrieveAllEUAsForAnEndUserV2Request, config?: AxiosRequestConfig): Promise<operations.RetrieveAllEUAsForAnEndUserV2Response>;
}
