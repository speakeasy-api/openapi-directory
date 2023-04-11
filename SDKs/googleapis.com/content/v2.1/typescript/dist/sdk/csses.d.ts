import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Csses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a single CSS domain by ID.
     */
    contentCssesGet(req: operations.ContentCssesGetRequest, security: operations.ContentCssesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentCssesGetResponse>;
    /**
     * Lists CSS domains affiliated with a CSS group.
     */
    contentCssesList(req: operations.ContentCssesListRequest, security: operations.ContentCssesListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentCssesListResponse>;
    /**
     * Updates labels that are assigned to a CSS domain by its CSS group.
     */
    contentCssesUpdatelabels(req: operations.ContentCssesUpdatelabelsRequest, security: operations.ContentCssesUpdatelabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ContentCssesUpdatelabelsResponse>;
}
