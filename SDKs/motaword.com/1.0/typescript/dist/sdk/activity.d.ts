import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Activity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getActivities - Get a list of realtime activities.
     *
     * Get a list of realtime activities on the project, such as translation suggestion and translation approval.
    **/
    getActivities(req: operations.GetActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetActivitiesResponse>;
    /**
     * getActivity - Get a single realtime activity.
     *
     * Get a single realtime activity.
    **/
    getActivity(req: operations.GetActivityRequest, config?: AxiosRequestConfig): Promise<operations.GetActivityResponse>;
    /**
     * getActivityComments - Get a list of comments belonging to this activity.
     *
     * Get a list of comments belonging to this activity.
    **/
    getActivityComments(req: operations.GetActivityCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetActivityCommentsResponse>;
    /**
     * getComments - Get a list of activity comments throughout the whole project.
     *
     * Get a list of activity comments throughout the whole project.
    **/
    getComments(req: operations.GetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentsResponse>;
    /**
     * getSalesActivities - Get sales activities for a project
    **/
    getSalesActivities(req: operations.GetSalesActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetSalesActivitiesResponse>;
    /**
     * insertSalesActivity - Insert sales activity for a project
    **/
    insertSalesActivity(req: operations.InsertSalesActivityRequest, config?: AxiosRequestConfig): Promise<operations.InsertSalesActivityResponse>;
    /**
     * submitComment - Submit a comment to an activity.
     *
     * Submit a comment to an activity.
    **/
    submitComment(req: operations.SubmitCommentRequest, config?: AxiosRequestConfig): Promise<operations.SubmitCommentResponse>;
}
