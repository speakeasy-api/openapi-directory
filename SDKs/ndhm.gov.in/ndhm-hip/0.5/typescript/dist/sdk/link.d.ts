import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Link {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postV05LinksLinkConfirm - Token submission by Consent Manager for link confirmation
     *
     * API to submit the token that was sent by HIP during the link request.
     *
    **/
    postV05LinksLinkConfirm(req: operations.PostV05LinksLinkConfirmRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkConfirmResponse>;
    /**
     * postV05LinksLinkInit - Link patient's care contexts
     *
     * Request from Gateway to links care contexts associated with only one patient
     *   1. **Validate account reference number and care context reference number**
     *   2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
     *       and were these care contexts discovered or not for a given patient**
     *   3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
     *   4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**
     *
    **/
    postV05LinksLinkInit(req: operations.PostV05LinksLinkInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkInitResponse>;
    /**
     * postV05LinksLinkOnAddContexts - callback API for HIP initiated patient linking /link/add-context
     *
     * If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so.
     *   1. **accessToken must be valid and must be for the purpose of linking**
     *
    **/
    postV05LinksLinkOnAddContexts(req: operations.PostV05LinksLinkOnAddContextsRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnAddContextsResponse>;
}
