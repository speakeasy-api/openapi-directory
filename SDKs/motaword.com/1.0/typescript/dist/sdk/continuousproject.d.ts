import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ContinuousProject {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a new document to your continuous project
     *
     * @remarks
     * Add a new document to your continuous project. If the name already exists, it will update the existing document. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.
     */
    addDocument(req: operations.AddDocumentRequest, config?: AxiosRequestConfig): Promise<operations.AddDocumentResponse>;
    /**
     * Save/collect analytics data from Active widget
     *
     * @remarks
     * Save/collect analytics data from Active widget
     */
    collectAnalytics(req: operations.CollectAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.CollectAnalyticsResponse>;
    /**
     * Complete continuous project
     *
     * @remarks
     * Complete continuous project
     */
    complete(req: operations.CompleteRequest, config?: AxiosRequestConfig): Promise<operations.CompleteResponse>;
    /**
     * Complete a continuous project document
     *
     * @remarks
     * Complete a continuous project document. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.
     */
    completeContinuousDocument(req: operations.CompleteContinuousDocumentRequest, config?: AxiosRequestConfig): Promise<operations.CompleteContinuousDocumentResponse>;
    /**
     * Complete continuous project language
     *
     * @remarks
     * Complete continuous project language
     */
    completeLanguage(req: operations.CompleteLanguageRequest, config?: AxiosRequestConfig): Promise<operations.CompleteLanguageResponse>;
    /**
     * Create a new Active widget
     *
     * @remarks
     * Create a new widget for your Active project to be used in your website. Most website-specific configuration is provided via widgets. This does not create a new Active project, just a separate widget.
     */
    createActiveWidget(req: operations.CreateActiveWidgetRequest, config?: AxiosRequestConfig): Promise<operations.CreateActiveWidgetResponse>;
    /**
     * Create a continuous project
     *
     * @remarks
     * Create a new continuous project for your software, website, CI/CD translation needs.
     */
    createContinuousProject(req: shared.ContinuousProject, config?: AxiosRequestConfig): Promise<operations.CreateContinuousProjectResponse>;
    /**
     * Create subscription for continuous project
     *
     * @remarks
     * Create subscription for continuous project
     */
    createSubscription(req: operations.CreateSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubscriptionResponse>;
    /**
     * Delete a single widget for this Active project
     *
     * @remarks
     * Delete a single widget for this Active project
     */
    deleteActiveWidget(req: operations.DeleteActiveWidgetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteActiveWidgetResponse>;
    /**
     * Delete a continuous project
     *
     * @remarks
     * Delete an existing continuous project. Your project will be cancelled, and you will still be charged for the amount of translations we have done for you so far.
     */
    deleteContinuousProject(req: operations.DeleteContinuousProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContinuousProjectResponse>;
    /**
     * Delete subscription for continuous project
     *
     * @remarks
     * Delete subscription for continuous project
     */
    deleteSubscription(req: operations.DeleteSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriptionResponse>;
    /**
     * View an Active widget
     *
     * @remarks
     * View the details of an Active widget to be used in your website. Most website-specific configuration is provided via widgets.
     */
    getActiveWidget(req: operations.GetActiveWidgetRequest, config?: AxiosRequestConfig): Promise<operations.GetActiveWidgetResponse>;
    /**
     * View Active widgets
     *
     * @remarks
     * View a list of widgets in your Active project to be used in your website. Most website-specific configuration is provided via widgets.
     */
    getActiveWidgets(req: operations.GetActiveWidgetsRequest, config?: AxiosRequestConfig): Promise<operations.GetActiveWidgetsResponse>;
    /**
     * Get JWT token to be used in analytics dashboards
     *
     * @remarks
     * Get JWT token to be used in analytics dashboards
     */
    getAnalyticsToken(req: operations.GetAnalyticsTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetAnalyticsTokenResponse>;
    /**
     * View a continuous project
     *
     * @remarks
     * View the details of a continuous project.
     */
    getContinuousProject(req: operations.GetContinuousProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetContinuousProjectResponse>;
    /**
     * View a continuous document
     *
     * @remarks
     * View the details of a source document in continuous translation project.
     */
    getContinuousProjectDocument(req: operations.GetContinuousProjectDocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetContinuousProjectDocumentResponse>;
    /**
     * Monitor progress of a continuous document
     *
     * @remarks
     * Monitor the translation progress of a document in a continuous project in real-time.
     */
    getContinuousProjectDocumentProgress(req: operations.GetContinuousProjectDocumentProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetContinuousProjectDocumentProgressResponse>;
    /**
     * View continuous documents
     *
     * @remarks
     * View the documents under this continuous project
     */
    getContinuousProjectDocuments(req: operations.GetContinuousProjectDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetContinuousProjectDocumentsResponse>;
    /**
     * Invoices of a continuous project
     *
     * @remarks
     * Get real-time access to a continuous project's invoices.
     */
    getContinuousProjectInvoices(req: operations.GetContinuousProjectInvoicesRequest, config?: AxiosRequestConfig): Promise<operations.GetContinuousProjectInvoicesResponse>;
    /**
     * Monitor progress and status of a continous project
     *
     * @remarks
     * Monitor the translation progress of an ongoing continuous project in real-time.
     */
    getContinuousProjectProgress(req: operations.GetContinuousProjectProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetContinuousProjectProgressResponse>;
    /**
     * View continuous projects
     *
     * @remarks
     * View a list of continuous projects under your account. Continuous projects are those that are constantly updated, such as a CI/CD project, software project, website translation and such.
     */
    getContinuousProjects(req: operations.GetContinuousProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetContinuousProjectsResponse>;
    /**
     * Get a quote for a continuous project document
     *
     * @remarks
     * Get a new quote for provided document in continuous project. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.
     */
    getQuoteForDocument(req: operations.GetQuoteForDocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteForDocumentResponse>;
    /**
     * Get quote for documents
     *
     * @remarks
     * Get a new quote for provided documents in continuous project
     */
    getQuoteForDocuments(req: operations.GetQuoteForDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteForDocumentsResponse>;
    /**
     * Get quote for language
     *
     * @remarks
     * Get a new quote for provided target language in continuous project
     */
    getQuoteForLanguage(req: operations.GetQuoteForLanguageRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteForLanguageResponse>;
    /**
     * Get quote for languages
     *
     * @remarks
     * Get a new quote for provided target languages in continuous project
     */
    getQuoteForLanguages(req: operations.GetQuoteForLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.GetQuoteForLanguagesResponse>;
    /**
     * Get subscription for continuous project
     *
     * @remarks
     * Get subscription for continuous project
     */
    getSubscription(req: operations.GetSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionResponse>;
    /**
     * Get continuous project document progress for multiple IDs
     *
     * @remarks
     * Get continuous project document progress for multiple IDs
     */
    postContinuousProjectDocumentProgress(req: operations.PostContinuousProjectDocumentProgressRequest, config?: AxiosRequestConfig): Promise<operations.PostContinuousProjectDocumentProgressResponse>;
    /**
     * Reset Active widget token
     *
     * @remarks
     * Reset the public token used with your Active widget. This token is used when communicating from your environment to MotaWord systems for translation, analytics and meta.
     */
    resetActiveWidgetToken(req: operations.ResetActiveWidgetTokenRequest, config?: AxiosRequestConfig): Promise<operations.ResetActiveWidgetTokenResponse>;
    /**
     * Instantly translate your content
     *
     * @remarks
     * Instantly translate your content with your existing TM and MT resources. This is the primary endpoint to translate your files and content on the fly, especially in CI/CD environments. This is a complex endpoint that is configured in your Active or Continuous Project dashboards. For instance, you can configure whether to use your TM, or translate missing strings via MT and then post-edit those new translations. There are various scenarios you can establish via a set of configurations.
     */
    translate(req: operations.TranslateRequest, config?: AxiosRequestConfig): Promise<operations.TranslateResponse>;
    /**
     * Update Active widget settings.
     *
     * @remarks
     * Update Active widget settings.
     */
    updateActiveWidget(req: operations.UpdateActiveWidgetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateActiveWidgetResponse>;
    /**
     * Update a continuous project
     *
     * @remarks
     * Update the details and settings of continuous project.
     */
    updateContinuousProject(req: operations.UpdateContinuousProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContinuousProjectResponse>;
    /**
     * Update the document
     *
     * @remarks
     * Update source document in your continuous project. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.
     */
    updateDocument(req: operations.UpdateDocumentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDocumentResponse>;
    /**
     * Update subscription for continuous project
     *
     * @remarks
     * Update subscription for continuous project
     */
    updateSubscription(req: operations.UpdateSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionResponse>;
    /**
     * Update subscription payment method for continuous project
     *
     * @remarks
     * Update subscription payment method for continuous project
     */
    updateSubscriptionPaymentMethod(req: operations.UpdateSubscriptionPaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionPaymentMethodResponse>;
}
