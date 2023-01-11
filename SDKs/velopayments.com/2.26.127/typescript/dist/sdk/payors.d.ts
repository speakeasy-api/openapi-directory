import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Payors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPayorById - Get Payor
     *
     * Get a Single Payor by Id.
     *
    **/
    getPayorById(req: operations.GetPayorByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPayorByIdResponse>;
    /**
     * getPayorByIdV2 - Get Payor
     *
     * Get a Single Payor by Id.
     *
    **/
    getPayorByIdV2(req: operations.GetPayorByIdV2Request, config?: AxiosRequestConfig): Promise<operations.GetPayorByIdV2Response>;
    /**
     * payorAddPayorLogo - Add Logo
     *
     * Add Payor Logo. Logo file is used in your branding, and emails sent to payees.
    **/
    payorAddPayorLogo(req: operations.PayorAddPayorLogoRequest, config?: AxiosRequestConfig): Promise<operations.PayorAddPayorLogoResponse>;
    /**
     * payorCreateApiKeyRequest - Create API Key
     *
     * Create an an API key for the given payor Id and application Id
    **/
    payorCreateApiKeyRequest(req: operations.PayorCreateApiKeyRequestRequest, config?: AxiosRequestConfig): Promise<operations.PayorCreateApiKeyRequestResponse>;
    /**
     * payorCreateApplicationRequest - Create Application
     *
     * Create an application for the given Payor ID. Applications are programatic users which can be assigned unique keys.
    **/
    payorCreateApplicationRequest(req: operations.PayorCreateApplicationRequestRequest, config?: AxiosRequestConfig): Promise<operations.PayorCreateApplicationRequestResponse>;
    /**
     * payorEmailOptOut - Reminder Email Opt-Out
     *
     * Update the emailRemindersOptOut field for a Payor. This API can be used to opt out
     * or opt into Payor Reminder emails. These emails are typically around payee events
     * such as payees registering and onboarding.
     *
    **/
    payorEmailOptOut(req: operations.PayorEmailOptOutRequest, config?: AxiosRequestConfig): Promise<operations.PayorEmailOptOutResponse>;
    /**
     * payorGetBranding - Get Branding
     *
     * Get the payor branding details.
    **/
    payorGetBranding(req: operations.PayorGetBrandingRequest, config?: AxiosRequestConfig): Promise<operations.PayorGetBrandingResponse>;
    /**
     * payorLinks - List Payor Links
     *
     * This endpoint allows you to list payor links
    **/
    payorLinks(req: operations.PayorLinksRequest, config?: AxiosRequestConfig): Promise<operations.PayorLinksResponse>;
}
