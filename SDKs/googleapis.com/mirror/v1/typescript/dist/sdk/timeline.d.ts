import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Timeline {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an attachment from a timeline item.
     */
    mirrorTimelineAttachmentsDelete(req: operations.MirrorTimelineAttachmentsDeleteRequest, security: operations.MirrorTimelineAttachmentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineAttachmentsDeleteResponse>;
    /**
     * Retrieves an attachment on a timeline item by item ID and attachment ID.
     */
    mirrorTimelineAttachmentsGet(req: operations.MirrorTimelineAttachmentsGetRequest, security: operations.MirrorTimelineAttachmentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineAttachmentsGetResponse>;
    /**
     * Adds a new attachment to a timeline item.
     */
    mirrorTimelineAttachmentsInsert(req: operations.MirrorTimelineAttachmentsInsertRequest, security: operations.MirrorTimelineAttachmentsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineAttachmentsInsertResponse>;
    /**
     * Returns a list of attachments for a timeline item.
     */
    mirrorTimelineAttachmentsList(req: operations.MirrorTimelineAttachmentsListRequest, security: operations.MirrorTimelineAttachmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineAttachmentsListResponse>;
    /**
     * Deletes a timeline item.
     */
    mirrorTimelineDelete(req: operations.MirrorTimelineDeleteRequest, security: operations.MirrorTimelineDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineDeleteResponse>;
    /**
     * Gets a single timeline item by ID.
     */
    mirrorTimelineGet(req: operations.MirrorTimelineGetRequest, security: operations.MirrorTimelineGetSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineGetResponse>;
    /**
     * Inserts a new item into the timeline.
     */
    mirrorTimelineInsert(req: operations.MirrorTimelineInsertRequest, security: operations.MirrorTimelineInsertSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineInsertResponse>;
    /**
     * Retrieves a list of timeline items for the authenticated user.
     */
    mirrorTimelineList(req: operations.MirrorTimelineListRequest, security: operations.MirrorTimelineListSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineListResponse>;
    /**
     * Updates a timeline item in place. This method supports patch semantics.
     */
    mirrorTimelinePatch(req: operations.MirrorTimelinePatchRequest, security: operations.MirrorTimelinePatchSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorTimelinePatchResponse>;
    /**
     * Updates a timeline item in place.
     */
    mirrorTimelineUpdate(req: operations.MirrorTimelineUpdateRequest, security: operations.MirrorTimelineUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorTimelineUpdateResponse>;
}
