import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CourseMappings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteCourseMappingsOfferingIdExternalCourseId - Remove course mapping
     *
     * Removes the course mapping between the offering and the externalCourseId.
    **/
    deleteCourseMappingsOfferingIdExternalCourseId(req: operations.DeleteCourseMappingsOfferingIdExternalCourseIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCourseMappingsOfferingIdExternalCourseIdResponse>;
    /**
     * getCourseMappings - Find course mappings
     *
     * Returns all course mappings for course offerings.
    **/
    getCourseMappings(config?: AxiosRequestConfig): Promise<operations.GetCourseMappingsResponse>;
    /**
     * getCourseMappingsExternalcourseExternalCourseId - Find course mappings by externalCourseId
     *
     * Responds with course mapping details by externalCourseId.
    **/
    getCourseMappingsExternalcourseExternalCourseId(req: operations.GetCourseMappingsExternalcourseExternalCourseIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCourseMappingsExternalcourseExternalCourseIdResponse>;
    /**
     * getCourseMappingsOfferingId - Find course mappings by offeringId
     *
     * Responds with course mapping details by offeringId.
    **/
    getCourseMappingsOfferingId(req: operations.GetCourseMappingsOfferingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCourseMappingsOfferingIdResponse>;
    /**
     * putCourseMappingsOfferingIdExternalCourseId - Add course mapping
     *
     * Creates a mapping between the offering and the externalCourseId.
    **/
    putCourseMappingsOfferingIdExternalCourseId(req: operations.PutCourseMappingsOfferingIdExternalCourseIdRequest, config?: AxiosRequestConfig): Promise<operations.PutCourseMappingsOfferingIdExternalCourseIdResponse>;
}
