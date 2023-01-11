import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Project {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cancelProject - Cancel your translation project
    **/
    cancelProject(req: operations.CancelProjectRequest, config?: AxiosRequestConfig): Promise<operations.CancelProjectResponse>;
    /**
     * createProject - Get a new quote
     *
     * Create a new project
    **/
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * deleteProject - Delete a project
     *
     * Delete(cancel) a project.
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * deliverProject - Deliver project
    **/
    deliverProject(req: operations.DeliverProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeliverProjectResponse>;
    /**
     * download - Download the latest translation package.
     *
     * Download the latest translation package. You must have given a /package call beforehand and wait until the packaging status is 'completed'.
    **/
    download(req: operations.DownloadRequest, config?: AxiosRequestConfig): Promise<operations.DownloadResponse>;
    /**
     * downloadHtmlInvoice - Download invoice as hmtl
     *
     * Download invoice as html by project id.
    **/
    downloadHtmlInvoice(req: operations.DownloadHtmlInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.DownloadHtmlInvoiceResponse>;
    /**
     * downloadLanguage - Download the latest translation package.
     *
     * Download only the translation package of this language. You must have given a /package call beforehand and wait until the packaging status is 'completed'.
    **/
    downloadLanguage(req: operations.DownloadLanguageRequest, config?: AxiosRequestConfig): Promise<operations.DownloadLanguageResponse>;
    /**
     * downloadPdfInvoice - Download invoice as pdf
     *
     * Download invoice as pdf by project id.
    **/
    downloadPdfInvoice(req: operations.DownloadPdfInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.DownloadPdfInvoiceResponse>;
    /**
     * getInvoice - Get invoice details
     *
     * Get invoice details
    **/
    getInvoice(req: operations.GetInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceResponse>;
    /**
     * getProgress - Get project progress
     *
     * Get the progress of an already launched project.
    **/
    getProgress(req: operations.GetProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetProgressResponse>;
    /**
     * getProject - Get single project
     *
     * Get single project
    **/
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * getProjectVendors - Get a list of vendors.
     *
     * Get a list of vendors.
    **/
    getProjectVendors(req: operations.GetProjectVendorsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectVendorsResponse>;
    /**
     * getProjects - Get a list of your projects
     *
     * Get a list of your projects
    **/
    getProjects(req: operations.GetProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * getQuoteIdFromInternalId - Get Quote Id
     *
     * Get Quote Id
    **/
    getQuoteIdFromInternalId(req: operations.GetQuoteIdFromInternalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteIdFromInternalIdResponse>;
    /**
     * getVendorProjects - Get a list of your vendor projects
     *
     * Get a list of your vendor projects
    **/
    getVendorProjects(req: operations.GetVendorProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetVendorProjectsResponse>;
    /**
     * getVendorProjectsByUserId - Get a list of user/vendor projects
     *
     * Get a list of user/vendor projects
    **/
    getVendorProjectsByUserId(req: operations.GetVendorProjectsByUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVendorProjectsByUserIdResponse>;
    /**
     * launchProject - Launch your translation project
    **/
    launchProject(req: operations.LaunchProjectRequest, config?: AxiosRequestConfig): Promise<operations.LaunchProjectResponse>;
    /**
     * package - Package the translation of all languages to be downloaded.
     *
     * Package the translation project, make it ready to be downloaded.
    **/
    package(req: operations.PackageRequest, config?: AxiosRequestConfig): Promise<operations.PackageResponse>;
    /**
     * packageLanguage - Package the translation of a specific target language to be downloaded.
     *
     * Package the translation project, make it ready to be downloaded.
    **/
    packageLanguage(req: operations.PackageLanguageRequest, config?: AxiosRequestConfig): Promise<operations.PackageLanguageResponse>;
    /**
     * recreateProject - Recreate your translation project from scratch. This is a risky action, you will lose current translations.
    **/
    recreateProject(req: operations.RecreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.RecreateProjectResponse>;
    /**
     * submitProjectReports - Submit reports for a project
    **/
    submitProjectReports(req: operations.SubmitProjectReportsRequest, config?: AxiosRequestConfig): Promise<operations.SubmitProjectReportsResponse>;
    /**
     * trackPackage - Track the status of translation packaging.
     *
     * This request will tell you the current progress of the translation packaging. You will use the 'key' provided by the /package call.
    **/
    trackPackage(req: operations.TrackPackageRequest, config?: AxiosRequestConfig): Promise<operations.TrackPackageResponse>;
    /**
     * triggerCallback - Trigger a call to your callback URL related to this project.
     *
     * Trigger a call to your callback URL related to this project.
    **/
    triggerCallback(req: operations.TriggerCallbackRequest, config?: AxiosRequestConfig): Promise<operations.TriggerCallbackResponse>;
    /**
     * updateProject - Update project language pairs
     *
     * Update project language pairs
    **/
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
}
