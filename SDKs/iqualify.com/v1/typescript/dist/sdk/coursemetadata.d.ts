import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CourseMetadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Update course category
     *
     * @remarks
     * Add or update course category in the metadata of a course.
     */
    putCoursesContentIdMetadataCategory(req: operations.PutCoursesContentIdMetadataCategoryRequest, config?: AxiosRequestConfig): Promise<operations.PutCoursesContentIdMetadataCategoryResponse>;
    /**
     * Update course level
     *
     * @remarks
     * Add or update the course level in the metadata of a course.
     */
    putCoursesContentIdMetadataLevel(req: operations.PutCoursesContentIdMetadataLevelRequest, config?: AxiosRequestConfig): Promise<operations.PutCoursesContentIdMetadataLevelResponse>;
    /**
     * Update course tags
     *
     * @remarks
     * Add or update course tags in the metadata of a course.
     */
    putCoursesContentIdMetadataTags(req: operations.PutCoursesContentIdMetadataTagsRequest, config?: AxiosRequestConfig): Promise<operations.PutCoursesContentIdMetadataTagsResponse>;
    /**
     * Update course topic
     *
     * @remarks
     * Add or update the course topic in the metadata of a course.
     */
    putCoursesContentIdMetadataTopic(req: operations.PutCoursesContentIdMetadataTopicRequest, config?: AxiosRequestConfig): Promise<operations.PutCoursesContentIdMetadataTopicResponse>;
}
