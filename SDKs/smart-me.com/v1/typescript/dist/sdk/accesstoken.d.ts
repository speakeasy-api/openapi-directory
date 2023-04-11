import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccessToken {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a Access Token to write on a Card (e.g. NFC)
     *
     * @remarks
     * Creates a Access Token to write on a Card (e.g. NFC)
     */
    accessTokenPutForm(req: shared.AccessTokenToPut, config?: AxiosRequestConfig): Promise<operations.AccessTokenPutFormResponse>;
    /**
     * Creates a Access Token to write on a Card (e.g. NFC)
     *
     * @remarks
     * Creates a Access Token to write on a Card (e.g. NFC)
     */
    accessTokenPutJson(req: shared.AccessTokenToPut, config?: AxiosRequestConfig): Promise<operations.AccessTokenPutJsonResponse>;
    /**
     * Creates a Access Token to write on a Card (e.g. NFC)
     *
     * @remarks
     * Creates a Access Token to write on a Card (e.g. NFC)
     */
    accessTokenPutRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.AccessTokenPutRawResponse>;
}
