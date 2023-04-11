import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Acl {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an access control rule.
     */
    calendarAclDelete(req: operations.CalendarAclDeleteRequest, security: operations.CalendarAclDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarAclDeleteResponse>;
    /**
     * Returns an access control rule.
     */
    calendarAclGet(req: operations.CalendarAclGetRequest, security: operations.CalendarAclGetSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarAclGetResponse>;
    /**
     * Creates an access control rule.
     */
    calendarAclInsert(req: operations.CalendarAclInsertRequest, security: operations.CalendarAclInsertSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarAclInsertResponse>;
    /**
     * Returns the rules in the access control list for the calendar.
     */
    calendarAclList(req: operations.CalendarAclListRequest, security: operations.CalendarAclListSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarAclListResponse>;
    /**
     * Updates an access control rule. This method supports patch semantics.
     */
    calendarAclPatch(req: operations.CalendarAclPatchRequest, security: operations.CalendarAclPatchSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarAclPatchResponse>;
    /**
     * Updates an access control rule.
     */
    calendarAclUpdate(req: operations.CalendarAclUpdateRequest, security: operations.CalendarAclUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarAclUpdateResponse>;
    /**
     * Watch for changes to ACL resources.
     */
    calendarAclWatch(req: operations.CalendarAclWatchRequest, security: operations.CalendarAclWatchSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarAclWatchResponse>;
}
