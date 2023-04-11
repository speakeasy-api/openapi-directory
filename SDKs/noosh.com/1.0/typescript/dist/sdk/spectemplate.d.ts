import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SpecTemplate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a specific Spec Template
     *
     * @remarks
     * Get a specific Spec Template
     */
    getSpecTemplate(req: operations.GetSpecTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecTemplateResponse>;
    /**
     * List Spec Templates of Workgroup Level
     *
     * @remarks
     * List Spec Templates of Workgroup Level
     */
    getSpecTemplateList(req: operations.GetSpecTemplateListRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecTemplateListResponse>;
}
