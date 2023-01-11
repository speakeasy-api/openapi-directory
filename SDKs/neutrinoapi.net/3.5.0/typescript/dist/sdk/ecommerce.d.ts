import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ECommerce {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * binListDownload - BIN List Download
     *
     * Download our entire BIN database for direct use on your own systems
    **/
    binListDownload(req: operations.BinListDownloadRequest, config?: AxiosRequestConfig): Promise<operations.BinListDownloadResponse>;
    /**
     * binLookup - BIN Lookup
     *
     * Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup
    **/
    binLookup(req: operations.BinLookupRequest, config?: AxiosRequestConfig): Promise<operations.BinLookupResponse>;
    /**
     * convert - Convert
     *
     * A powerful unit conversion tool
    **/
    convert(req: operations.ConvertRequest, config?: AxiosRequestConfig): Promise<operations.ConvertResponse>;
}
