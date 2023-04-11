import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Activity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Monitor project activities
     *
     * @remarks
     * Get a list of real-time activities in the project, such as translation suggestion and translation approval.
     */
    getActivities(req: operations.GetActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetActivitiesResponse>;
    /**
     * View an activity
     *
     * @remarks
     * View the details of an activity in the project.
     */
    getActivity(req: operations.GetActivityRequest, config?: AxiosRequestConfig): Promise<operations.GetActivityResponse>;
    /**
     * View activity comments
     *
     * @remarks
     * View a list of comments added to this activity.
     */
    getActivityComments(req: operations.GetActivityCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetActivityCommentsResponse>;
    /**
     * View all project comments
     *
     * @remarks
     * View a list of activity comments in the project.
     */
    getComments(req: operations.GetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentsResponse>;
    /**
     * Get sales activities for a project
     */
    getSalesActivities(req: operations.GetSalesActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetSalesActivitiesResponse>;
    /**
     * Insert sales activity for a project
     */
    insertSalesActivity(req: operations.InsertSalesActivityRequest, config?: AxiosRequestConfig): Promise<operations.InsertSalesActivityResponse>;
    /**
     * Submit comment to an activity
     *
     * @remarks
     * Submit a comment to an activity in the project, such as translation or editing.
     */
    submitCommentJson(req: operations.SubmitCommentJsonRequest, config?: AxiosRequestConfig): Promise<operations.SubmitCommentJsonResponse>;
    /**
     * Submit comment to an activity
     *
     * @remarks
     * Submit a comment to an activity in the project, such as translation or editing.
     */
    submitCommentMultipart(req: operations.SubmitCommentMultipartRequest, config?: AxiosRequestConfig): Promise<operations.SubmitCommentMultipartResponse>;
}
