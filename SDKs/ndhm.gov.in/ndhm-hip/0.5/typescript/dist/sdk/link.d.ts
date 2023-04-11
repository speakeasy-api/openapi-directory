import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Link {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Token submission by Consent Manager for link confirmation
     *
     * @remarks
     * API to submit the token that was sent by HIP during the link request.
     *
     */
    postV05LinksLinkConfirmJson(req: operations.PostV05LinksLinkConfirmJsonRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkConfirmJsonResponse>;
    /**
     * Token submission by Consent Manager for link confirmation
     *
     * @remarks
     * API to submit the token that was sent by HIP during the link request.
     *
     */
    postV05LinksLinkConfirmRaw(req: operations.PostV05LinksLinkConfirmRawRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkConfirmRawResponse>;
    /**
     * Link patient's care contexts
     *
     * @remarks
     * Request from Gateway to links care contexts associated with only one patient
     *   1. **Validate account reference number and care context reference number**
     *   2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
     *       and were these care contexts discovered or not for a given patient**
     *   3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
     *   4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**
     *
     */
    postV05LinksLinkInitJson(req: operations.PostV05LinksLinkInitJsonRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkInitJsonResponse>;
    /**
     * Link patient's care contexts
     *
     * @remarks
     * Request from Gateway to links care contexts associated with only one patient
     *   1. **Validate account reference number and care context reference number**
     *   2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
     *       and were these care contexts discovered or not for a given patient**
     *   3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
     *   4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**
     *
     */
    postV05LinksLinkInitRaw(req: operations.PostV05LinksLinkInitRawRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkInitRawResponse>;
    /**
     * callback API for HIP initiated patient linking /link/add-context
     *
     * @remarks
     * If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so.
     *   1. **accessToken must be valid and must be for the purpose of linking**
     *
     */
    postV05LinksLinkOnAddContextsJson(req: operations.PostV05LinksLinkOnAddContextsJsonRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnAddContextsJsonResponse>;
    /**
     * callback API for HIP initiated patient linking /link/add-context
     *
     * @remarks
     * If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so.
     *   1. **accessToken must be valid and must be for the purpose of linking**
     *
     */
    postV05LinksLinkOnAddContextsRaw(req: operations.PostV05LinksLinkOnAddContextsRawRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnAddContextsRawResponse>;
}
