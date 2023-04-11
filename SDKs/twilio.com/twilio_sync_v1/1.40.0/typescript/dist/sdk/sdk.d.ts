import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://sync.twilio.com"];
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
    createDocument(req: operations.CreateDocumentRequest, security: operations.CreateDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateDocumentResponse>;
    createService(req: operations.CreateServiceCreateServiceRequest, security: operations.CreateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * Create a new Stream Message.
     */
    createStreamMessage(req: operations.CreateStreamMessageRequest, security: operations.CreateStreamMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateStreamMessageResponse>;
    createSyncList(req: operations.CreateSyncListRequest, security: operations.CreateSyncListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSyncListResponse>;
    createSyncListItem(req: operations.CreateSyncListItemRequest, security: operations.CreateSyncListItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSyncListItemResponse>;
    createSyncMap(req: operations.CreateSyncMapRequest, security: operations.CreateSyncMapSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSyncMapResponse>;
    createSyncMapItem(req: operations.CreateSyncMapItemRequest, security: operations.CreateSyncMapItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSyncMapItemResponse>;
    /**
     * Create a new Stream.
     */
    createSyncStream(req: operations.CreateSyncStreamRequest, security: operations.CreateSyncStreamSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSyncStreamResponse>;
    deleteDocument(req: operations.DeleteDocumentRequest, security: operations.DeleteDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteDocumentResponse>;
    /**
     * Delete a specific Sync Document Permission.
     */
    deleteDocumentPermission(req: operations.DeleteDocumentPermissionRequest, security: operations.DeleteDocumentPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteDocumentPermissionResponse>;
    deleteService(req: operations.DeleteServiceRequest, security: operations.DeleteServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    deleteSyncList(req: operations.DeleteSyncListRequest, security: operations.DeleteSyncListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncListResponse>;
    deleteSyncListItem(req: operations.DeleteSyncListItemRequest, security: operations.DeleteSyncListItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncListItemResponse>;
    /**
     * Delete a specific Sync List Permission.
     */
    deleteSyncListPermission(req: operations.DeleteSyncListPermissionRequest, security: operations.DeleteSyncListPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncListPermissionResponse>;
    deleteSyncMap(req: operations.DeleteSyncMapRequest, security: operations.DeleteSyncMapSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncMapResponse>;
    deleteSyncMapItem(req: operations.DeleteSyncMapItemRequest, security: operations.DeleteSyncMapItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncMapItemResponse>;
    /**
     * Delete a specific Sync Map Permission.
     */
    deleteSyncMapPermission(req: operations.DeleteSyncMapPermissionRequest, security: operations.DeleteSyncMapPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncMapPermissionResponse>;
    /**
     * Delete a specific Stream.
     */
    deleteSyncStream(req: operations.DeleteSyncStreamRequest, security: operations.DeleteSyncStreamSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSyncStreamResponse>;
    fetchDocument(req: operations.FetchDocumentRequest, security: operations.FetchDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDocumentResponse>;
    /**
     * Fetch a specific Sync Document Permission.
     */
    fetchDocumentPermission(req: operations.FetchDocumentPermissionRequest, security: operations.FetchDocumentPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDocumentPermissionResponse>;
    fetchService(req: operations.FetchServiceRequest, security: operations.FetchServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    fetchSyncList(req: operations.FetchSyncListRequest, security: operations.FetchSyncListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncListResponse>;
    fetchSyncListItem(req: operations.FetchSyncListItemRequest, security: operations.FetchSyncListItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncListItemResponse>;
    /**
     * Fetch a specific Sync List Permission.
     */
    fetchSyncListPermission(req: operations.FetchSyncListPermissionRequest, security: operations.FetchSyncListPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncListPermissionResponse>;
    fetchSyncMap(req: operations.FetchSyncMapRequest, security: operations.FetchSyncMapSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncMapResponse>;
    fetchSyncMapItem(req: operations.FetchSyncMapItemRequest, security: operations.FetchSyncMapItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncMapItemResponse>;
    /**
     * Fetch a specific Sync Map Permission.
     */
    fetchSyncMapPermission(req: operations.FetchSyncMapPermissionRequest, security: operations.FetchSyncMapPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncMapPermissionResponse>;
    /**
     * Fetch a specific Stream.
     */
    fetchSyncStream(req: operations.FetchSyncStreamRequest, security: operations.FetchSyncStreamSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSyncStreamResponse>;
    listDocument(req: operations.ListDocumentRequest, security: operations.ListDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDocumentResponse>;
    /**
     * Retrieve a list of all Permissions applying to a Sync Document.
     */
    listDocumentPermission(req: operations.ListDocumentPermissionRequest, security: operations.ListDocumentPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDocumentPermissionResponse>;
    listService(req: operations.ListServiceRequest, security: operations.ListServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    listSyncList(req: operations.ListSyncListRequest, security: operations.ListSyncListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncListResponse>;
    listSyncListItem(req: operations.ListSyncListItemRequest, security: operations.ListSyncListItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncListItemResponse>;
    /**
     * Retrieve a list of all Permissions applying to a Sync List.
     */
    listSyncListPermission(req: operations.ListSyncListPermissionRequest, security: operations.ListSyncListPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncListPermissionResponse>;
    listSyncMap(req: operations.ListSyncMapRequest, security: operations.ListSyncMapSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncMapResponse>;
    listSyncMapItem(req: operations.ListSyncMapItemRequest, security: operations.ListSyncMapItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncMapItemResponse>;
    /**
     * Retrieve a list of all Permissions applying to a Sync Map.
     */
    listSyncMapPermission(req: operations.ListSyncMapPermissionRequest, security: operations.ListSyncMapPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncMapPermissionResponse>;
    /**
     * Retrieve a list of all Streams in a Service Instance.
     */
    listSyncStream(req: operations.ListSyncStreamRequest, security: operations.ListSyncStreamSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSyncStreamResponse>;
    updateDocument(req: operations.UpdateDocumentRequest, security: operations.UpdateDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDocumentResponse>;
    /**
     * Update an identity's access to a specific Sync Document.
     */
    updateDocumentPermission(req: operations.UpdateDocumentPermissionRequest, security: operations.UpdateDocumentPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDocumentPermissionResponse>;
    updateService(req: operations.UpdateServiceRequest, security: operations.UpdateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    updateSyncList(req: operations.UpdateSyncListRequest, security: operations.UpdateSyncListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncListResponse>;
    updateSyncListItem(req: operations.UpdateSyncListItemRequest, security: operations.UpdateSyncListItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncListItemResponse>;
    /**
     * Update an identity's access to a specific Sync List.
     */
    updateSyncListPermission(req: operations.UpdateSyncListPermissionRequest, security: operations.UpdateSyncListPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncListPermissionResponse>;
    updateSyncMap(req: operations.UpdateSyncMapRequest, security: operations.UpdateSyncMapSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncMapResponse>;
    updateSyncMapItem(req: operations.UpdateSyncMapItemRequest, security: operations.UpdateSyncMapItemSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncMapItemResponse>;
    /**
     * Update an identity's access to a specific Sync Map.
     */
    updateSyncMapPermission(req: operations.UpdateSyncMapPermissionRequest, security: operations.UpdateSyncMapPermissionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncMapPermissionResponse>;
    /**
     * Update a specific Stream.
     */
    updateSyncStream(req: operations.UpdateSyncStreamRequest, security: operations.UpdateSyncStreamSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSyncStreamResponse>;
}
