import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Courses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCourses - Find courses
     *
     * Responds with all courses (draft and published.)
    **/
    getCourses(config?: AxiosRequestConfig): Promise<operations.GetCoursesResponse>;
    /**
     * getCoursesContentId - Find course by contentId
     *
     * Responds with a course matching the contentId.
    **/
    getCoursesContentId(req: operations.GetCoursesContentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCoursesContentIdResponse>;
    /**
     * getCoursesContentIdActivations - Find activations for a contentId
     *
     * Responds with all activations for the contentId provided.
    **/
    getCoursesContentIdActivations(req: operations.GetCoursesContentIdActivationsRequest, config?: AxiosRequestConfig): Promise<operations.GetCoursesContentIdActivationsResponse>;
    /**
     * getCoursesContentIdPermissions - Find users who have access to the contentId provided
     *
     * Responds with users who have access to a specific course by contentId.
    **/
    getCoursesContentIdPermissions(req: operations.GetCoursesContentIdPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCoursesContentIdPermissionsResponse>;
    /**
     * postCoursesRootContentIdPermissionsUserEmail - Update course access
     *
     * Provide a user with access to a specific course by rootContentId.
    **/
    postCoursesRootContentIdPermissionsUserEmail(req: operations.PostCoursesRootContentIdPermissionsUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.PostCoursesRootContentIdPermissionsUserEmailResponse>;
}
