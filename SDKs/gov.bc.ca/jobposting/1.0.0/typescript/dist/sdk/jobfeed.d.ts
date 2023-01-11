import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class JobFeed {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getIndustries - Industries
     *
     * The Industries endpoint returns all the Industries and related sub industries
     * defined in WorkBC's Job Board. The response includes the id and caption for
     * each industry and each sub industry.
     *
    **/
    getIndustries(config?: AxiosRequestConfig): Promise<operations.GetIndustriesResponse>;
    /**
     * getJobTypes - Job Types
     *
     * The Job Types endpoint returns details of all of the
     * job types defined in WorkBC's Job Board. The response includes the
     * id and caption.
     *
    **/
    getJobTypes(config?: AxiosRequestConfig): Promise<operations.GetJobTypesResponse>;
    /**
     * getMajorProjects - Major Projects
     *
     * The Major Projects endpoint returns details of all of the
     * major projects defined in WorkBC's Job Board. The response includes the
     * id and caption.
     *
    **/
    getMajorProjects(config?: AxiosRequestConfig): Promise<operations.GetMajorProjectsResponse>;
    /**
     * getRegions - Regions
     *
     * The Regions endpoint returns details of all of the
     * regions defined in WorkBC's Job Board. The response includes the
     * id and caption.
     *
    **/
    getRegions(config?: AxiosRequestConfig): Promise<operations.GetRegionsResponse>;
}
