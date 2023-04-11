import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://messaging.twilio.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    createAlphaSender(req: operations.CreateAlphaSenderRequest, security: operations.CreateAlphaSenderSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateAlphaSenderResponse>;
    createBrandRegistrations(req: operations.CreateBrandRegistrationsCreateBrandRegistrationsRequest, security: operations.CreateBrandRegistrationsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateBrandRegistrationsResponse>;
    createBrandVetting(req: operations.CreateBrandVettingRequest, security: operations.CreateBrandVettingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateBrandVettingResponse>;
    createExternalCampaign(req: operations.CreateExternalCampaignCreateExternalCampaignRequest, security: operations.CreateExternalCampaignSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateExternalCampaignResponse>;
    createLinkshorteningMessagingService(req: operations.CreateLinkshorteningMessagingServiceRequest, security: operations.CreateLinkshorteningMessagingServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateLinkshorteningMessagingServiceResponse>;
    createPhoneNumber(req: operations.CreatePhoneNumberRequest, security: operations.CreatePhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreatePhoneNumberResponse>;
    createService(req: operations.CreateServiceCreateServiceRequest, security: operations.CreateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    createShortCode(req: operations.CreateShortCodeRequest, security: operations.CreateShortCodeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateShortCodeResponse>;
    createTollfreeVerification(req: operations.CreateTollfreeVerificationCreateTollfreeVerificationRequest, security: operations.CreateTollfreeVerificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateTollfreeVerificationResponse>;
    createUsAppToPerson(req: operations.CreateUsAppToPersonRequest, security: operations.CreateUsAppToPersonSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUsAppToPersonResponse>;
    deleteAlphaSender(req: operations.DeleteAlphaSenderRequest, security: operations.DeleteAlphaSenderSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteAlphaSenderResponse>;
    deleteDomainCertV4(req: operations.DeleteDomainCertV4Request, security: operations.DeleteDomainCertV4Security, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteDomainCertV4Response>;
    deleteLinkshorteningMessagingService(req: operations.DeleteLinkshorteningMessagingServiceRequest, security: operations.DeleteLinkshorteningMessagingServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteLinkshorteningMessagingServiceResponse>;
    deletePhoneNumber(req: operations.DeletePhoneNumberRequest, security: operations.DeletePhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeletePhoneNumberResponse>;
    deleteService(req: operations.DeleteServiceRequest, security: operations.DeleteServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    deleteShortCode(req: operations.DeleteShortCodeRequest, security: operations.DeleteShortCodeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteShortCodeResponse>;
    deleteUsAppToPerson(req: operations.DeleteUsAppToPersonRequest, security: operations.DeleteUsAppToPersonSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUsAppToPersonResponse>;
    fetchAlphaSender(req: operations.FetchAlphaSenderRequest, security: operations.FetchAlphaSenderSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAlphaSenderResponse>;
    fetchBrandRegistrations(req: operations.FetchBrandRegistrationsRequest, security: operations.FetchBrandRegistrationsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchBrandRegistrationsResponse>;
    fetchBrandVetting(req: operations.FetchBrandVettingRequest, security: operations.FetchBrandVettingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchBrandVettingResponse>;
    /**
     * Fetch a list of all United States numbers that have been deactivated on a specific date.
     */
    fetchDeactivation(req: operations.FetchDeactivationRequest, security: operations.FetchDeactivationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDeactivationResponse>;
    fetchDomainCertV4(req: operations.FetchDomainCertV4Request, security: operations.FetchDomainCertV4Security, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDomainCertV4Response>;
    fetchDomainConfig(req: operations.FetchDomainConfigRequest, security: operations.FetchDomainConfigSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDomainConfigResponse>;
    fetchDomainConfigMessagingService(req: operations.FetchDomainConfigMessagingServiceRequest, security: operations.FetchDomainConfigMessagingServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDomainConfigMessagingServiceResponse>;
    fetchPhoneNumber(req: operations.FetchPhoneNumberRequest, security: operations.FetchPhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchPhoneNumberResponse>;
    fetchService(req: operations.FetchServiceRequest, security: operations.FetchServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    fetchShortCode(req: operations.FetchShortCodeRequest, security: operations.FetchShortCodeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchShortCodeResponse>;
    fetchTollfreeVerification(req: operations.FetchTollfreeVerificationRequest, security: operations.FetchTollfreeVerificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTollfreeVerificationResponse>;
    fetchUsAppToPerson(req: operations.FetchUsAppToPersonRequest, security: operations.FetchUsAppToPersonSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUsAppToPersonResponse>;
    fetchUsAppToPersonUsecase(req: operations.FetchUsAppToPersonUsecaseRequest, security: operations.FetchUsAppToPersonUsecaseSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUsAppToPersonUsecaseResponse>;
    fetchUsecase(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUsecaseResponse>;
    listAlphaSender(req: operations.ListAlphaSenderRequest, security: operations.ListAlphaSenderSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAlphaSenderResponse>;
    listBrandRegistrations(req: operations.ListBrandRegistrationsRequest, security: operations.ListBrandRegistrationsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListBrandRegistrationsResponse>;
    listBrandVetting(req: operations.ListBrandVettingRequest, security: operations.ListBrandVettingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListBrandVettingResponse>;
    listPhoneNumber(req: operations.ListPhoneNumberRequest, security: operations.ListPhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListPhoneNumberResponse>;
    listService(req: operations.ListServiceRequest, security: operations.ListServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    listShortCode(req: operations.ListShortCodeRequest, security: operations.ListShortCodeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListShortCodeResponse>;
    listTollfreeVerification(req: operations.ListTollfreeVerificationRequest, security: operations.ListTollfreeVerificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTollfreeVerificationResponse>;
    listUsAppToPerson(req: operations.ListUsAppToPersonRequest, security: operations.ListUsAppToPersonSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUsAppToPersonResponse>;
    updateBrandRegistrations(req: operations.UpdateBrandRegistrationsRequest, security: operations.UpdateBrandRegistrationsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateBrandRegistrationsResponse>;
    updateDomainCertV4(req: operations.UpdateDomainCertV4Request, security: operations.UpdateDomainCertV4Security, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDomainCertV4Response>;
    updateDomainConfig(req: operations.UpdateDomainConfigRequest, security: operations.UpdateDomainConfigSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDomainConfigResponse>;
    updateService(req: operations.UpdateServiceRequest, security: operations.UpdateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    updateTollfreeVerification(req: operations.UpdateTollfreeVerificationRequest, security: operations.UpdateTollfreeVerificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateTollfreeVerificationResponse>;
}
