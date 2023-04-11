import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A Payor is the entity which is sending money. Here you will find the available APIs for working with Payors.
 */
export declare class Payors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Payor
     *
     * @remarks
     * <p>Get a Single Payor by Id.</p>
     * <p>deprecated since v2.10 - Use /v2/payors
     *
     */
    getPayorByIdV1(req: operations.GetPayorByIdV1Request, config?: AxiosRequestConfig): Promise<operations.GetPayorByIdV1Response>;
    /**
     * Get Payor
     *
     * @remarks
     * Get a Single Payor by Id.
     *
     */
    getPayorByIdV2(req: operations.GetPayorByIdV2Request, config?: AxiosRequestConfig): Promise<operations.GetPayorByIdV2Response>;
    /**
     * Add Logo
     *
     * @remarks
     * <p>Add Payor Logo</p>
     * <p>Logo file is used in your branding and emails sent to payees</p>
     *
     */
    payorAddPayorLogoV1(req: operations.PayorAddPayorLogoV1Request, config?: AxiosRequestConfig): Promise<operations.PayorAddPayorLogoV1Response>;
    /**
     * Create API Key
     *
     * @remarks
     * <p>Create an an API key for the given payor Id and application Id</p>
     * <p>You can create multiple API Keys for a given application</p>
     * <p>API Keys are programmatic users for integrating your application with the Velo platform</p>
     *
     */
    payorCreateApiKeyV1(req: operations.PayorCreateApiKeyV1Request, config?: AxiosRequestConfig): Promise<operations.PayorCreateApiKeyV1Response>;
    /**
     * Create Application
     *
     * @remarks
     * <p>Create an application for the given Payor ID.</p>
     * <p>Applications provide a means to group your API Keys</p>
     * <p>For example you might have an SAP application that you wish to integrate with Velo</p>
     * <p>You can create an application and then create one or more API keys for the application</p>
     *
     */
    payorCreateApplicationV1(req: operations.PayorCreateApplicationV1Request, config?: AxiosRequestConfig): Promise<operations.PayorCreateApplicationV1Response>;
    /**
     * Reminder Email Opt-Out
     *
     * @remarks
     * Update the emailRemindersOptOut field for a Payor. This API can be used to opt out
     * or opt into Payor Reminder emails. These emails are typically around payee events
     * such as payees registering and onboarding.
     *
     */
    payorEmailOptOut(req: operations.PayorEmailOptOutRequest, config?: AxiosRequestConfig): Promise<operations.PayorEmailOptOutResponse>;
    /**
     * Get Branding
     *
     * @remarks
     * Get the payor branding details.
     */
    payorGetBranding(req: operations.PayorGetBrandingRequest, config?: AxiosRequestConfig): Promise<operations.PayorGetBrandingResponse>;
}
