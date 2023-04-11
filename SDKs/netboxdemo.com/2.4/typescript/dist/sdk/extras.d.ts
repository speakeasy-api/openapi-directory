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
    extrasChoicesList(config?: AxiosRequestConfig): Promise<operations.ExtrasChoicesListResponse>;
    extrasChoicesRead(req: operations.ExtrasChoicesReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasChoicesReadResponse>;
    extrasConfigContextsCreate(req: shared.WritableConfigContextInput, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsCreateResponse>;
    extrasConfigContextsDelete(req: operations.ExtrasConfigContextsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsDeleteResponse>;
    extrasConfigContextsList(req: operations.ExtrasConfigContextsListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsListResponse>;
    extrasConfigContextsPartialUpdate(req: operations.ExtrasConfigContextsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsPartialUpdateResponse>;
    extrasConfigContextsRead(req: operations.ExtrasConfigContextsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsReadResponse>;
    extrasConfigContextsUpdate(req: operations.ExtrasConfigContextsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasConfigContextsUpdateResponse>;
    extrasExportTemplatesCreate(req: shared.ExportTemplateInput, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesCreateResponse>;
    extrasExportTemplatesDelete(req: operations.ExtrasExportTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesDeleteResponse>;
    extrasExportTemplatesList(req: operations.ExtrasExportTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesListResponse>;
    extrasExportTemplatesPartialUpdate(req: operations.ExtrasExportTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesPartialUpdateResponse>;
    extrasExportTemplatesRead(req: operations.ExtrasExportTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesReadResponse>;
    extrasExportTemplatesUpdate(req: operations.ExtrasExportTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasExportTemplatesUpdateResponse>;
    extrasGraphsCreate(req: shared.WritableGraphInput, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsCreateResponse>;
    extrasGraphsDelete(req: operations.ExtrasGraphsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsDeleteResponse>;
    extrasGraphsList(req: operations.ExtrasGraphsListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsListResponse>;
    extrasGraphsPartialUpdate(req: operations.ExtrasGraphsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsPartialUpdateResponse>;
    extrasGraphsRead(req: operations.ExtrasGraphsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsReadResponse>;
    extrasGraphsUpdate(req: operations.ExtrasGraphsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasGraphsUpdateResponse>;
    extrasImageAttachmentsCreate(req: shared.ImageAttachmentInput, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsCreateResponse>;
    extrasImageAttachmentsDelete(req: operations.ExtrasImageAttachmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsDeleteResponse>;
    extrasImageAttachmentsList(req: operations.ExtrasImageAttachmentsListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsListResponse>;
    extrasImageAttachmentsPartialUpdate(req: operations.ExtrasImageAttachmentsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasImageAttachmentsPartialUpdateResponse>;
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
    extrasRecentActivityList(req: operations.ExtrasRecentActivityListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasRecentActivityListResponse>;
    extrasRecentActivityRead(req: operations.ExtrasRecentActivityReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasRecentActivityReadResponse>;
    extrasTagsCreate(req: shared.TagInput, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsCreateResponse>;
    extrasTagsDelete(req: operations.ExtrasTagsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsDeleteResponse>;
    extrasTagsList(req: operations.ExtrasTagsListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsListResponse>;
    extrasTagsPartialUpdate(req: operations.ExtrasTagsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsPartialUpdateResponse>;
    extrasTagsRead(req: operations.ExtrasTagsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsReadResponse>;
    extrasTagsUpdate(req: operations.ExtrasTagsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTagsUpdateResponse>;
    extrasTopologyMapsCreate(req: shared.WritableTopologyMapInput, config?: AxiosRequestConfig): Promise<operations.ExtrasTopologyMapsCreateResponse>;
    extrasTopologyMapsDelete(req: operations.ExtrasTopologyMapsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTopologyMapsDeleteResponse>;
    extrasTopologyMapsList(req: operations.ExtrasTopologyMapsListRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTopologyMapsListResponse>;
    extrasTopologyMapsPartialUpdate(req: operations.ExtrasTopologyMapsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTopologyMapsPartialUpdateResponse>;
    extrasTopologyMapsRead(req: operations.ExtrasTopologyMapsReadRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTopologyMapsReadResponse>;
    extrasTopologyMapsRender(req: operations.ExtrasTopologyMapsRenderRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTopologyMapsRenderResponse>;
    extrasTopologyMapsUpdate(req: operations.ExtrasTopologyMapsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ExtrasTopologyMapsUpdateResponse>;
}
