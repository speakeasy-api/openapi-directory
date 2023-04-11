import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Alerts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Performs batch delete operation on alerts.
     */
    alertcenterAlertsBatchDelete(req: operations.AlertcenterAlertsBatchDeleteRequest, security: operations.AlertcenterAlertsBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsBatchDeleteResponse>;
    /**
     * Performs batch undelete operation on alerts.
     */
    alertcenterAlertsBatchUndelete(req: operations.AlertcenterAlertsBatchUndeleteRequest, security: operations.AlertcenterAlertsBatchUndeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsBatchUndeleteResponse>;
    /**
     * Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
     */
    alertcenterAlertsDelete(req: operations.AlertcenterAlertsDeleteRequest, security: operations.AlertcenterAlertsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsDeleteResponse>;
    /**
     * Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
     */
    alertcenterAlertsFeedbackCreate(req: operations.AlertcenterAlertsFeedbackCreateRequest, security: operations.AlertcenterAlertsFeedbackCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsFeedbackCreateResponse>;
    /**
     * Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
     */
    alertcenterAlertsFeedbackList(req: operations.AlertcenterAlertsFeedbackListRequest, security: operations.AlertcenterAlertsFeedbackListSecurity, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsFeedbackListResponse>;
    /**
     * Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
     */
    alertcenterAlertsGet(req: operations.AlertcenterAlertsGetRequest, security: operations.AlertcenterAlertsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsGetResponse>;
    /**
     * Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
     */
    alertcenterAlertsGetMetadata(req: operations.AlertcenterAlertsGetMetadataRequest, security: operations.AlertcenterAlertsGetMetadataSecurity, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsGetMetadataResponse>;
    /**
     * Lists the alerts.
     */
    alertcenterAlertsList(req: operations.AlertcenterAlertsListRequest, security: operations.AlertcenterAlertsListSecurity, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsListResponse>;
    /**
     * Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.
     */
    alertcenterAlertsUndelete(req: operations.AlertcenterAlertsUndeleteRequest, security: operations.AlertcenterAlertsUndeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsUndeleteResponse>;
}
