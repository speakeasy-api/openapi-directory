import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://messaging.twilio.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    createAlphaSender(req: operations.CreateAlphaSenderRequest, config?: AxiosRequestConfig): Promise<operations.CreateAlphaSenderResponse>;
    createBrandRegistrations(req: operations.CreateBrandRegistrationsRequest, config?: AxiosRequestConfig): Promise<operations.CreateBrandRegistrationsResponse>;
    createBrandVetting(req: operations.CreateBrandVettingRequest, config?: AxiosRequestConfig): Promise<operations.CreateBrandVettingResponse>;
    createExternalCampaign(req: operations.CreateExternalCampaignRequest, config?: AxiosRequestConfig): Promise<operations.CreateExternalCampaignResponse>;
    createPhoneNumber(req: operations.CreatePhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.CreatePhoneNumberResponse>;
    createService(req: operations.CreateServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    createShortCode(req: operations.CreateShortCodeRequest, config?: AxiosRequestConfig): Promise<operations.CreateShortCodeResponse>;
    createTollfreeVerification(req: operations.CreateTollfreeVerificationRequest, config?: AxiosRequestConfig): Promise<operations.CreateTollfreeVerificationResponse>;
    createUsAppToPerson(req: operations.CreateUsAppToPersonRequest, config?: AxiosRequestConfig): Promise<operations.CreateUsAppToPersonResponse>;
    deleteAlphaSender(req: operations.DeleteAlphaSenderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlphaSenderResponse>;
    deleteDomainCertV4(req: operations.DeleteDomainCertV4Request, config?: AxiosRequestConfig): Promise<operations.DeleteDomainCertV4Response>;
    deletePhoneNumber(req: operations.DeletePhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeletePhoneNumberResponse>;
    deleteService(req: operations.DeleteServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    deleteShortCode(req: operations.DeleteShortCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteShortCodeResponse>;
    deleteUsAppToPerson(req: operations.DeleteUsAppToPersonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsAppToPersonResponse>;
    fetchAlphaSender(req: operations.FetchAlphaSenderRequest, config?: AxiosRequestConfig): Promise<operations.FetchAlphaSenderResponse>;
    fetchBrandRegistrations(req: operations.FetchBrandRegistrationsRequest, config?: AxiosRequestConfig): Promise<operations.FetchBrandRegistrationsResponse>;
    fetchBrandVetting(req: operations.FetchBrandVettingRequest, config?: AxiosRequestConfig): Promise<operations.FetchBrandVettingResponse>;
    /**
     * fetchDeactivation - Fetch a list of all United States numbers that have been deactivated on a specific date.
    **/
    fetchDeactivation(req: operations.FetchDeactivationRequest, config?: AxiosRequestConfig): Promise<operations.FetchDeactivationResponse>;
    fetchDomainCertV4(req: operations.FetchDomainCertV4Request, config?: AxiosRequestConfig): Promise<operations.FetchDomainCertV4Response>;
    fetchDomainConfig(req: operations.FetchDomainConfigRequest, config?: AxiosRequestConfig): Promise<operations.FetchDomainConfigResponse>;
    fetchPhoneNumber(req: operations.FetchPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.FetchPhoneNumberResponse>;
    fetchService(req: operations.FetchServiceRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    fetchShortCode(req: operations.FetchShortCodeRequest, config?: AxiosRequestConfig): Promise<operations.FetchShortCodeResponse>;
    fetchTollfreeVerification(req: operations.FetchTollfreeVerificationRequest, config?: AxiosRequestConfig): Promise<operations.FetchTollfreeVerificationResponse>;
    fetchUsAppToPerson(req: operations.FetchUsAppToPersonRequest, config?: AxiosRequestConfig): Promise<operations.FetchUsAppToPersonResponse>;
    fetchUsAppToPersonUsecase(req: operations.FetchUsAppToPersonUsecaseRequest, config?: AxiosRequestConfig): Promise<operations.FetchUsAppToPersonUsecaseResponse>;
    fetchUsecase(req: operations.FetchUsecaseRequest, config?: AxiosRequestConfig): Promise<operations.FetchUsecaseResponse>;
    listAlphaSender(req: operations.ListAlphaSenderRequest, config?: AxiosRequestConfig): Promise<operations.ListAlphaSenderResponse>;
    listBrandRegistrations(req: operations.ListBrandRegistrationsRequest, config?: AxiosRequestConfig): Promise<operations.ListBrandRegistrationsResponse>;
    listBrandVetting(req: operations.ListBrandVettingRequest, config?: AxiosRequestConfig): Promise<operations.ListBrandVettingResponse>;
    listPhoneNumber(req: operations.ListPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.ListPhoneNumberResponse>;
    listService(req: operations.ListServiceRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    listShortCode(req: operations.ListShortCodeRequest, config?: AxiosRequestConfig): Promise<operations.ListShortCodeResponse>;
    listTollfreeVerification(req: operations.ListTollfreeVerificationRequest, config?: AxiosRequestConfig): Promise<operations.ListTollfreeVerificationResponse>;
    listUsAppToPerson(req: operations.ListUsAppToPersonRequest, config?: AxiosRequestConfig): Promise<operations.ListUsAppToPersonResponse>;
    updateBrandRegistrations(req: operations.UpdateBrandRegistrationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBrandRegistrationsResponse>;
    updateDomainCertV4(req: operations.UpdateDomainCertV4Request, config?: AxiosRequestConfig): Promise<operations.UpdateDomainCertV4Response>;
    updateDomainConfig(req: operations.UpdateDomainConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainConfigResponse>;
    updateService(req: operations.UpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
}
