import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pdf {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiPdf - Basic method to verify api is up and running
    **/
    getApiPdf(config?: AxiosRequestConfig): Promise<operations.GetApiPdfResponse>;
    /**
     * postApiPdfWkhtmltopdf - Generate pdf file from url using the excellent tool wkhtmltopdf.
    **/
    postApiPdfWkhtmltopdf(req: operations.PostApiPdfWkhtmltopdfRequest, config?: AxiosRequestConfig): Promise<operations.PostApiPdfWkhtmltopdfResponse>;
}
