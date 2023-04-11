import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CourseMappings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove course mapping
     *
     * @remarks
     * Removes the course mapping between the offering and the externalCourseId.
     */
    deleteCourseMappingsOfferingIdExternalCourseId(req: operations.DeleteCourseMappingsOfferingIdExternalCourseIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCourseMappingsOfferingIdExternalCourseIdResponse>;
    /**
     * Find course mappings
     *
     * @remarks
     * Returns all course mappings for course offerings.
     */
    getCourseMappings(config?: AxiosRequestConfig): Promise<operations.GetCourseMappingsResponse>;
    /**
     * Find course mappings by externalCourseId
     *
     * @remarks
     * Responds with course mapping details by externalCourseId.
     */
    getCourseMappingsExternalcourseExternalCourseId(req: operations.GetCourseMappingsExternalcourseExternalCourseIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCourseMappingsExternalcourseExternalCourseIdResponse>;
    /**
     * Find course mappings by offeringId
     *
     * @remarks
     * Responds with course mapping details by offeringId.
     */
    getCourseMappingsOfferingId(req: operations.GetCourseMappingsOfferingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCourseMappingsOfferingIdResponse>;
    /**
     * Add course mapping
     *
     * @remarks
     * Creates a mapping between the offering and the externalCourseId.
     */
    putCourseMappingsOfferingIdExternalCourseId(req: operations.PutCourseMappingsOfferingIdExternalCourseIdRequest, config?: AxiosRequestConfig): Promise<operations.PutCourseMappingsOfferingIdExternalCourseIdResponse>;
}
