import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pdf {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create PDF
     *
     * @remarks
     * Creates a PDF containing the background check results.
     */
    createPDF(req: operations.CreatePDFRequest, config?: AxiosRequestConfig): Promise<operations.CreatePDFResponse>;
    /**
     * Get PDF
     *
     * @remarks
     * Downloads the PDF in the specified language, Spanish by default.
     */
    getPDF(req: operations.GetPDFRequest, config?: AxiosRequestConfig): Promise<operations.GetPDFResponse>;
}
