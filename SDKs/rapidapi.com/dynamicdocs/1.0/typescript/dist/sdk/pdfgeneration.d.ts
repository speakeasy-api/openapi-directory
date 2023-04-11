import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PDFGeneration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Compile New Document PDF
     *
     * @remarks
     * Compile a PDF document from a specific template
     */
    compile(req: operations.CompileRequest, config?: AxiosRequestConfig): Promise<operations.CompileResponse>;
}
