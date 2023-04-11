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
     * API for HIP initiated care-context linking for patient
     *
     * @remarks
     * API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.
     *   1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired
     *
     */
    postV05LinksLinkAddContextsJson(req: operations.PostV05LinksLinkAddContextsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkAddContextsJsonResponse>;
    /**
     * API for HIP initiated care-context linking for patient
     *
     * @remarks
     * API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.
     *   1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired
     *
     */
    postV05LinksLinkAddContextsRaw(req: operations.PostV05LinksLinkAddContextsRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkAddContextsRawResponse>;
    /**
     * Token submission by Consent Manager for link confirmation
     *
     * @remarks
     * API to submit the token that was sent by HIP during the link request.
     *
     */
    postV05LinksLinkConfirmJson(req: operations.PostV05LinksLinkConfirmJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkConfirmJsonResponse>;
    /**
     * Token submission by Consent Manager for link confirmation
     *
     * @remarks
     * API to submit the token that was sent by HIP during the link request.
     *
     */
    postV05LinksLinkConfirmRaw(req: operations.PostV05LinksLinkConfirmRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkConfirmRawResponse>;
    /**
     * Link patient's care contexts
     *
     * @remarks
     * Request from CM to links care contexts associated with only one patient
     *   1. **Validate account reference number and care context reference number**
     *   2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
     *       and were these care contexts discovered or not for a given patient**
     *   3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
     *   4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**
     *
     */
    postV05LinksLinkInitJson(req: operations.PostV05LinksLinkInitJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkInitJsonResponse>;
    /**
     * Link patient's care contexts
     *
     * @remarks
     * Request from CM to links care contexts associated with only one patient
     *   1. **Validate account reference number and care context reference number**
     *   2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
     *       and were these care contexts discovered or not for a given patient**
     *   3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
     *   4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**
     *
     */
    postV05LinksLinkInitRaw(req: operations.PostV05LinksLinkInitRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkInitRawResponse>;
    /**
     * callback API for HIP initiated patient linking /link/add-context
     *
     * @remarks
     * If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so.
     *   1. **accessToken must be valid and must be for the purpose of linking**
     *
     */
    postV05LinksLinkOnAddContextsJson(req: operations.PostV05LinksLinkOnAddContextsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnAddContextsJsonResponse>;
    /**
     * callback API for HIP initiated patient linking /link/add-context
     *
     * @remarks
     * If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so.
     *   1. **accessToken must be valid and must be for the purpose of linking**
     *
     */
    postV05LinksLinkOnAddContextsRaw(req: operations.PostV05LinksLinkOnAddContextsRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnAddContextsRawResponse>;
    /**
     * Token authenticated by HIP, indicating completion of linkage of care-contexts
     *
     * @remarks
     * Returns a list of linked care contexts with patient reference number.
     *   1. **Validated and linked account reference number**
     *   2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
     *   3. **Verified that same Consent Manager which made the link request is sending the token**
     *   4. **Results of unmasked linked care contexts with patient reference number**
     *
     */
    postV05LinksLinkOnConfirmJson(req: operations.PostV05LinksLinkOnConfirmJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnConfirmJsonResponse>;
    /**
     * Token authenticated by HIP, indicating completion of linkage of care-contexts
     *
     * @remarks
     * Returns a list of linked care contexts with patient reference number.
     *   1. **Validated and linked account reference number**
     *   2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
     *   3. **Verified that same Consent Manager which made the link request is sending the token**
     *   4. **Results of unmasked linked care contexts with patient reference number**
     *
     */
    postV05LinksLinkOnConfirmRaw(req: operations.PostV05LinksLinkOnConfirmRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnConfirmRawResponse>;
    /**
     * Response to patient's care context link request
     *
     * @remarks
     * Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
     *   1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
     *   2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
     *   3. **HIP should communicate the mode of authentication of a successful request**
     *   4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * The error section in the body, represents the potential errors that may have occurred. Possible reasons:
     *   1. **Patient reference number is invalid**
     *   2. **Care context reference numbers are invalid**
     *
     */
    postV05LinksLinkOnInitJson(req: operations.PostV05LinksLinkOnInitJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnInitJsonResponse>;
    /**
     * Response to patient's care context link request
     *
     * @remarks
     * Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
     *   1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
     *   2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
     *   3. **HIP should communicate the mode of authentication of a successful request**
     *   4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * The error section in the body, represents the potential errors that may have occurred. Possible reasons:
     *   1. **Patient reference number is invalid**
     *   2. **Care context reference numbers are invalid**
     *
     */
    postV05LinksLinkOnInitRaw(req: operations.PostV05LinksLinkOnInitRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnInitRawResponse>;
}
