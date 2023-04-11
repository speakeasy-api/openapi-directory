import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 *
 * @see {@link https://sms77.io/en/docs/gateway/http-api} - Get number format, CNAM,- HLR- or MNP information for given phone number
 */
export declare class Lookup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    lookup(req: operations.LookupRequest, config?: AxiosRequestConfig): Promise<operations.LookupResponse>;
    lookupCnam(req: operations.LookupCnamRequest, config?: AxiosRequestConfig): Promise<operations.LookupCnamResponse>;
    lookupFormat(req: operations.LookupFormatRequest, config?: AxiosRequestConfig): Promise<operations.LookupFormatResponse>;
    lookupHlr(req: operations.LookupHlrRequest, config?: AxiosRequestConfig): Promise<operations.LookupHlrResponse>;
    lookupMnp(req: operations.LookupMnpRequest, config?: AxiosRequestConfig): Promise<operations.LookupMnpResponse>;
}
