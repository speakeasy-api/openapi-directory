import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Extras {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    extrasCustomFieldChoicesList(config?: AxiosRequestConfig): Promise<operations.ExtrasCustomFieldChoicesListResponse>;
    extrasCustomFieldChoicesRead(req: operations.ExtrasCustomFieldChoicesReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasCustomFieldChoicesReadResponse>;
    extrasConfigContextsCreate(req: shared.WritableConfigContextInput, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsCreateResponse>;
    extrasConfigContextsDelete(req: operations.ExtrasConfigContextsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    extrasConfigContextsList(req: operations.ExtrasConfigContextsListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsListResponse>;
    extrasConfigContextsPartialUpdate(req: operations.ExtrasConfigContextsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    extrasConfigContextsRead(req: operations.ExtrasConfigContextsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsReadResponse>;
    extrasConfigContextsUpdate(req: operations.ExtrasConfigContextsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsUpdateResponse>;
    extrasExportTemplatesCreate(req: shared.WritableExportTemplateInput, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesCreateResponse>;
    extrasExportTemplatesDelete(req: operations.ExtrasExportTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    extrasExportTemplatesList(req: operations.ExtrasExportTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesListResponse>;
    extrasExportTemplatesPartialUpdate(req: operations.ExtrasExportTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    extrasExportTemplatesRead(req: operations.ExtrasExportTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesReadResponse>;
    extrasExportTemplatesUpdate(req: operations.ExtrasExportTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesUpdateResponse>;
    extrasGraphsCreate(req: shared.GraphInput, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsCreateResponse>;
    extrasGraphsDelete(req: operations.ExtrasGraphsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    extrasGraphsList(req: operations.ExtrasGraphsListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsListResponse>;
    extrasGraphsPartialUpdate(req: operations.ExtrasGraphsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    extrasGraphsRead(req: operations.ExtrasGraphsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsReadResponse>;
    extrasGraphsUpdate(req: operations.ExtrasGraphsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsUpdateResponse>;
    extrasImageAttachmentsCreate(req: shared.ImageAttachmentInput, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsCreateResponse>;
    extrasImageAttachmentsDelete(req: operations.ExtrasImageAttachmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    extrasImageAttachmentsList(req: operations.ExtrasImageAttachmentsListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsListResponse>;
    extrasImageAttachmentsPartialUpdate(req: operations.ExtrasImageAttachmentsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    extrasImageAttachmentsRead(req: operations.ExtrasImageAttachmentsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsReadResponse>;
    extrasImageAttachmentsUpdate(req: operations.ExtrasImageAttachmentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsUpdateResponse>;
    /**
     * Retrieve a list of recent changes.
     */
    extrasObjectChangesList(req: operations.ExtrasObjectChangesListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasObjectChangesListResponse>;
    /**
     * Retrieve a list of recent changes.
     */
    extrasObjectChangesRead(req: operations.ExtrasObjectChangesReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasObjectChangesReadResponse>;
    /**
     * Compile all reports and their related results (if any). Result data is deferred in the list view.
     */
    extrasReportsList(config?: AxiosRequestConfig): Promise<operations.ExtrasReportsListResponse>;
    /**
     * Retrieve a single Report identified as "<module>.<report>".
     */
    extrasReportsRead(req: operations.ExtrasReportsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasReportsReadResponse>;
    /**
     * Run a Report and create a new ReportResult, overwriting any previous result for the Report.
     */
    extrasReportsRun(req: operations.ExtrasReportsRunRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasReportsRunResponse>;
    extrasScriptsList(config?: AxiosRequestConfig): Promise<operations.ExtrasScriptsListResponse>;
    extrasScriptsRead(req: operations.ExtrasScriptsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasScriptsReadResponse>;
    extrasTagsCreate(req: shared.TagInput, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsCreateResponse>;
    extrasTagsDelete(req: operations.ExtrasTagsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    extrasTagsList(req: operations.ExtrasTagsListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsListResponse>;
    extrasTagsPartialUpdate(req: operations.ExtrasTagsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    extrasTagsRead(req: operations.ExtrasTagsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsReadResponse>;
    extrasTagsUpdate(req: operations.ExtrasTagsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsUpdateResponse>;
}
