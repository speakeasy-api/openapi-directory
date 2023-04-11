import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CompanySpecificSchema {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Company-Specific Open API Documentation
     *
     * @remarks
     * The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Web Pay. The customized schemas also indicate which properties are required by the company within Web Pay.<br  />To learn more about Open API, click [here](https://www.openapis.org/)
     */
    getCompanySpecificOpenAPIDocumentation(req: operations.GetCompanySpecificOpenAPIDocumentationRequest, security: operations.GetCompanySpecificOpenAPIDocumentationSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompanySpecificOpenAPIDocumentationResponse>;
}
