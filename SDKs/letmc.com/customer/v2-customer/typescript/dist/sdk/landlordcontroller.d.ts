import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LandlordController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Post tenancy maintenance preferences:-
     */
    landlordControllerCreateMaintenancePreference(req: operations.LandlordControllerCreateMaintenancePreferenceRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerCreateMaintenancePreferenceResponse>;
    /**
     * Get the accounting details for the landlord.
     */
    landlordControllerGetAccounts(req: operations.LandlordControllerGetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetAccountsResponse>;
    /**
     * Download a Document
     */
    landlordControllerGetDocument(req: operations.LandlordControllerGetDocumentRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetDocumentResponse>;
    /**
     * Generate a Inventory PDF for a tenancy
     */
    landlordControllerGetInvetoryReport(req: operations.LandlordControllerGetInvetoryReportRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetInvetoryReportResponse>;
    /**
     * Get an invoice pdf belonging to the landlord.
     */
    landlordControllerGetInvoice(req: operations.LandlordControllerGetInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetInvoiceResponse>;
    /**
     * Retrieve landlord's CRM ID
     */
    landlordControllerGetLandlordCrmEntries(req: operations.LandlordControllerGetLandlordCrmEntriesRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetLandlordCrmEntriesResponse>;
    /**
     * Get Active maintenance jobs.
     */
    landlordControllerGetMaintenanceJobs(req: operations.LandlordControllerGetMaintenanceJobsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetMaintenanceJobsResponse>;
    /**
     * Generate a Profit and Loss Report
     */
    landlordControllerGetProfitLossReport(req: operations.LandlordControllerGetProfitLossReportRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetProfitLossReportResponse>;
    /**
     * Rent Arrears
     */
    landlordControllerGetRentArrears(req: operations.LandlordControllerGetRentArrearsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetRentArrearsResponse>;
    /**
     * Generate a Self Assessment Tax Report
     */
    landlordControllerGetSASReport(req: operations.LandlordControllerGetSASReportRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetSASReportResponse>;
    /**
     * Get contact details of all linked landlords.
     */
    landlordControllerGetSettings(req: operations.LandlordControllerGetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetSettingsResponse>;
    /**
     * Get the summary details for the landlord.
     */
    landlordControllerGetSummaryDetails(req: operations.LandlordControllerGetSummaryDetailsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetSummaryDetailsResponse>;
    /**
     * Get tenancy details.
     */
    landlordControllerGetTenancy(req: operations.LandlordControllerGetTenancyRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetTenancyResponse>;
    /**
     * Generate a Tenancy Agreement Copy (PDF)
     */
    landlordControllerGetTenancyAgreementReport(req: operations.LandlordControllerGetTenancyAgreementReportRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetTenancyAgreementReportResponse>;
}
