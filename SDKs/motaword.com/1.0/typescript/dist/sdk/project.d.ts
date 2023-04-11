import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Project {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Assign a CM to the project
     */
    assignCM(req: operations.AssignCMRequest, config?: AxiosRequestConfig): Promise<operations.AssignCMResponse>;
    /**
     * Cancel your translation project
     *
     * @remarks
     * If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.
     */
    cancelProject(req: operations.CancelProjectRequest, config?: AxiosRequestConfig): Promise<operations.CancelProjectResponse>;
    /**
     * Create a new project
     *
     * @remarks
     * Create a new translation project. Projects are not launched (you are not charged) until you `/launch` the created project.
     */
    createProjectJson(req: shared.NewProject, config?: AxiosRequestConfig): Promise<operations.CreateProjectJsonResponse>;
    /**
     * Create a new project
     *
     * @remarks
     * Create a new translation project. Projects are not launched (you are not charged) until you `/launch` the created project.
     */
    createProjectMultipart(req: shared.NewProject1, config?: AxiosRequestConfig): Promise<operations.CreateProjectMultipartResponse>;
    /**
     * Delete your translation project
     *
     * @remarks
     * If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.
     */
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * Deliver project
     *
     * @remarks
     * Deliver project to the owner of the project. You can also download your translations in `/package` and `/download` endpoints.
     */
    deliverProject(req: operations.DeliverProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeliverProjectResponse>;
    /**
     * Download your translated project
     *
     * @remarks
     * Download the latest translation package. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.
     */
    download(req: operations.DownloadRequest, config?: AxiosRequestConfig): Promise<operations.DownloadResponse>;
    /**
     * Download project invoice (HTML)
     *
     * @remarks
     * Download your project invoice as HTML. This is useful when you want to show your users the invoice in a webpage.
     */
    downloadHtmlInvoice(req: operations.DownloadHtmlInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.DownloadHtmlInvoiceResponse>;
    /**
     * Download your translated project language
     *
     * @remarks
     * Download the latest translation package for your target language. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.
     */
    downloadLanguage(req: operations.DownloadLanguageRequest, config?: AxiosRequestConfig): Promise<operations.DownloadLanguageResponse>;
    /**
     * Download project invoice (PDF)
     *
     * @remarks
     * Download your project invoice as PDF. Your invoice may be in "unpaid" status, in which case youn can see the payment instructions in the PDF file.
     */
    downloadPdfInvoice(req: operations.DownloadPdfInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.DownloadPdfInvoiceResponse>;
    /**
     * View project invoice
     *
     * @remarks
     * View your invoice details for your translation project.
     */
    getInvoice(req: operations.GetInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceResponse>;
    /**
     * View progress of a project
     *
     * @remarks
     * Monitor the translation progress of an already launched project in real-time.
     */
    getProgress(req: operations.GetProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetProgressResponse>;
    /**
     * View a translation project
     *
     * @remarks
     * View the details of a translation project in your account.
     */
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * Get a list of vendors.
     *
     * @remarks
     * Get a list of vendors.
     */
    getProjectVendors(req: operations.GetProjectVendorsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectVendorsResponse>;
    /**
     * View your translation projects
     *
     * @remarks
     * View the translation projects ordered in your account. If you have the related permission (configured by your account administrator), you can view the projects of your colleagues under the same company account.
     */
    getProjects(req: operations.GetProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * Get Quote Id
     *
     * @remarks
     * Get Quote Id
     */
    getQuoteIdFromInternalId(req: operations.GetQuoteIdFromInternalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteIdFromInternalIdResponse>;
    /**
     * List projects as a vendor
     *
     * @remarks
     * Get a list of projects that are available to you to work on as a vendor. This is not a list of projects that you ordered as a customer.
     */
    getVendorProjects(req: operations.GetVendorProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetVendorProjectsResponse>;
    /**
     * Get a list of user/vendor projects
     *
     * @remarks
     * Get a list of user/vendor projects
     */
    getVendorProjectsByUserId(req: operations.GetVendorProjectsByUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVendorProjectsByUserIdResponse>;
    /**
     * Launch your translation project
     *
     * @remarks
     * Launch your translation project so MotaWord can actually start working on your translation.
     */
    launchProject(req: operations.LaunchProjectRequest, config?: AxiosRequestConfig): Promise<operations.LaunchProjectResponse>;
    /**
     * Package your translated project
     *
     * @remarks
     * Package the translations in your project, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project.
     */
    package(req: operations.PackageRequest, config?: AxiosRequestConfig): Promise<operations.PackageResponse>;
    /**
     * Package your translated project language
     *
     * @remarks
     * Package the translations in your project for a specific target language, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project in this target language.
     */
    packageLanguage(req: operations.PackageLanguageRequest, config?: AxiosRequestConfig): Promise<operations.PackageLanguageResponse>;
    /**
     * Recreate your translation project from scratch. This is a risky action, you will lose current translations.
     */
    recreateProject(req: operations.RecreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.RecreateProjectResponse>;
    /**
     * Send a quote email
     *
     * @remarks
     * Send a quote email
     */
    sendQuoteEmail(req: operations.SendQuoteEmailRequest, config?: AxiosRequestConfig): Promise<operations.SendQuoteEmailResponse>;
    /**
     * Submit feedback report for a project
     */
    submitProjectReports(req: operations.SubmitProjectReportsRequest, config?: AxiosRequestConfig): Promise<operations.SubmitProjectReportsResponse>;
    /**
     * Track translation packaging status
     *
     * @remarks
     * Track the packaging status of your translations, by using the `key` from packaging request. Once packaging is completed, you can download your translations via `/download` endpoints.
     */
    trackPackage(req: operations.TrackPackageRequest, config?: AxiosRequestConfig): Promise<operations.TrackPackageResponse>;
    /**
     * Trigger a call to your callback URL related to this project.
     *
     * @remarks
     * Trigger a call to your callback URL related to this project.
     */
    triggerCallback(req: operations.TriggerCallbackRequest, config?: AxiosRequestConfig): Promise<operations.TriggerCallbackResponse>;
    /**
     * Update project info and settings
     */
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
}
