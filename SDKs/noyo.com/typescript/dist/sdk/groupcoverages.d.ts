import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GroupCoverages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createGroupCoverage - Create new Group Coverage
     *
     * Here you’ll be able to add the lines of coverage for your group, including type of coverage and the requested effective date.
    **/
    createGroupCoverage(req: operations.CreateGroupCoverageRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupCoverageResponse>;
    /**
     * editGroupCoverage - Edit a Group Coverage
     *
     * Edit a group coverage based on the ID provided. The version parameter must match the latest group coverage version.
    **/
    editGroupCoverage(req: operations.EditGroupCoverageRequest, config?: AxiosRequestConfig): Promise<operations.EditGroupCoverageResponse>;
    /**
     * getApplicationGroupCoverages - Get all Application Group Coverages
     *
     * Returns a list of all group coverages for a given application
    **/
    getApplicationGroupCoverages(req: operations.GetApplicationGroupCoveragesRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationGroupCoveragesResponse>;
    /**
     * getGroupCoverage - Get Group Coverage
     *
     * Returns the latest version of a single group coverage based on the ID provided.
    **/
    getGroupCoverage(req: operations.GetGroupCoverageRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupCoverageResponse>;
}
