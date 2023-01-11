import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LandlordController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * landlordControllerCreateMaintenancePreference - Post tenancy maintenance preferences:-
    **/
    landlordControllerCreateMaintenancePreference(req: operations.LandlordControllerCreateMaintenancePreferenceRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerCreateMaintenancePreferenceResponse>;
    /**
     * landlordControllerGetAccounts - Get the accounting details for the landlord.
    **/
    landlordControllerGetAccounts(req: operations.LandlordControllerGetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetAccountsResponse>;
    /**
     * landlordControllerGetDocument - Download a Document
    **/
    landlordControllerGetDocument(req: operations.LandlordControllerGetDocumentRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetDocumentResponse>;
    /**
     * landlordControllerGetInvetoryReport - Generate a Inventory PDF for a tenancy
    **/
    landlordControllerGetInvetoryReport(req: operations.LandlordControllerGetInvetoryReportRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetInvetoryReportResponse>;
    /**
     * landlordControllerGetInvoice - Get an invoice pdf belonging to the landlord.
    **/
    landlordControllerGetInvoice(req: operations.LandlordControllerGetInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetInvoiceResponse>;
    /**
     * landlordControllerGetLandlordCrmEntries - Retrieve landlord's CRM ID
    **/
    landlordControllerGetLandlordCrmEntries(req: operations.LandlordControllerGetLandlordCrmEntriesRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetLandlordCrmEntriesResponse>;
    /**
     * landlordControllerGetMaintenanceJobs - Get Active maintenance jobs.
    **/
    landlordControllerGetMaintenanceJobs(req: operations.LandlordControllerGetMaintenanceJobsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetMaintenanceJobsResponse>;
    /**
     * landlordControllerGetProfitLossReport - Generate a Profit and Loss Report
    **/
    landlordControllerGetProfitLossReport(req: operations.LandlordControllerGetProfitLossReportRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetProfitLossReportResponse>;
    /**
     * landlordControllerGetRentArrears - Rent Arrears
    **/
    landlordControllerGetRentArrears(req: operations.LandlordControllerGetRentArrearsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetRentArrearsResponse>;
    /**
     * landlordControllerGetSasReport - Generate a Self Assessment Tax Report
    **/
    landlordControllerGetSasReport(req: operations.LandlordControllerGetSasReportRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetSasReportResponse>;
    /**
     * landlordControllerGetSettings - Get contact details of all linked landlords.
    **/
    landlordControllerGetSettings(req: operations.LandlordControllerGetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetSettingsResponse>;
    /**
     * landlordControllerGetSummaryDetails - Get the summary details for the landlord.
    **/
    landlordControllerGetSummaryDetails(req: operations.LandlordControllerGetSummaryDetailsRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetSummaryDetailsResponse>;
    /**
     * landlordControllerGetTenancy - Get tenancy details.
    **/
    landlordControllerGetTenancy(req: operations.LandlordControllerGetTenancyRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetTenancyResponse>;
    /**
     * landlordControllerGetTenancyAgreementReport - Generate a Tenancy Agreement Copy (PDF)
    **/
    landlordControllerGetTenancyAgreementReport(req: operations.LandlordControllerGetTenancyAgreementReportRequest, config?: AxiosRequestConfig): Promise<operations.LandlordControllerGetTenancyAgreementReportResponse>;
}
