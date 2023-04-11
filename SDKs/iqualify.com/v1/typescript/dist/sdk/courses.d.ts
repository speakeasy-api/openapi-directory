import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Courses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Find courses
     *
     * @remarks
     * Responds with all courses (draft and published.)
     */
    getCourses(config?: AxiosRequestConfig): Promise<operations.GetCoursesResponse>;
    /**
     * Find course by contentId
     *
     * @remarks
     * Responds with a course matching the contentId.
     */
    getCoursesContentId(req: operations.GetCoursesContentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCoursesContentIdResponse>;
    /**
     * Find activations for a contentId
     *
     * @remarks
     * Responds with all activations for the contentId provided.
     */
    getCoursesContentIdActivations(req: operations.GetCoursesContentIdActivationsRequest, config?: AxiosRequestConfig): Promise<operations.GetCoursesContentIdActivationsResponse>;
    /**
     * Find users who have access to the contentId provided
     *
     * @remarks
     * Responds with users who have access to a specific course by contentId.
     */
    getCoursesContentIdPermissions(req: operations.GetCoursesContentIdPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCoursesContentIdPermissionsResponse>;
    /**
     * Update course access
     *
     * @remarks
     * Provide a user with access to a specific course by rootContentId.
     */
    postCoursesRootContentIdPermissionsUserEmail(req: operations.PostCoursesRootContentIdPermissionsUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.PostCoursesRootContentIdPermissionsUserEmailResponse>;
}
