import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CourseMetadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * putCoursesContentIdMetadataCategory - Update course category
     *
     * Add or update course category in the metadata of a course.
    **/
    putCoursesContentIdMetadataCategory(req: operations.PutCoursesContentIdMetadataCategoryRequest, config?: AxiosRequestConfig): Promise<operations.PutCoursesContentIdMetadataCategoryResponse>;
    /**
     * putCoursesContentIdMetadataLevel - Update course level
     *
     * Add or update the course level in the metadata of a course.
    **/
    putCoursesContentIdMetadataLevel(req: operations.PutCoursesContentIdMetadataLevelRequest, config?: AxiosRequestConfig): Promise<operations.PutCoursesContentIdMetadataLevelResponse>;
    /**
     * putCoursesContentIdMetadataTags - Update course tags
     *
     * Add or update course tags in the metadata of a course.
    **/
    putCoursesContentIdMetadataTags(req: operations.PutCoursesContentIdMetadataTagsRequest, config?: AxiosRequestConfig): Promise<operations.PutCoursesContentIdMetadataTagsResponse>;
    /**
     * putCoursesContentIdMetadataTopic - Update course topic
     *
     * Add or update the course topic in the metadata of a course.
    **/
    putCoursesContentIdMetadataTopic(req: operations.PutCoursesContentIdMetadataTopicRequest, config?: AxiosRequestConfig): Promise<operations.PutCoursesContentIdMetadataTopicResponse>;
}
