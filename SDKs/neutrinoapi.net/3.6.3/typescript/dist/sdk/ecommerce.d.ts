import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ECommerce {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * BIN List Download
     *
     * @remarks
     * Download our entire BIN database for direct use on your own systems
     */
    binListDownload(req: operations.BINListDownloadRequest, config?: AxiosRequestConfig): Promise<operations.BINListDownloadResponse>;
    /**
     * BIN Lookup
     *
     * @remarks
     * Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup
     */
    binLookup(req: operations.BINLookupRequest, config?: AxiosRequestConfig): Promise<operations.BINLookupResponse>;
    /**
     * Convert
     *
     * @remarks
     * A currency and unit conversion tool
     */
    convert(req: operations.ConvertRequest, config?: AxiosRequestConfig): Promise<operations.ConvertResponse>;
}
