import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PayorsPrivate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a Payor Link
     *
     * @remarks
     * This endpoint allows you to create a payor link.
     */
    createPayorLinks(req: shared.CreatePayorLinkRequest, security: operations.CreatePayorLinksSecurity, config?: AxiosRequestConfig): Promise<operations.CreatePayorLinksResponse>;
}
