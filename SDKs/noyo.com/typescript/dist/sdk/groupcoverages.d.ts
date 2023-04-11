import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GroupCoverages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create new Group Coverage
     *
     * @remarks
     * Here you’ll be able to add the lines of coverage for your group, including type of coverage and the requested effective date.
     */
    createGroupCoverage(req: operations.CreateGroupCoverageRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupCoverageResponse>;
    /**
     * Edit a Group Coverage
     *
     * @remarks
     * Edit a group coverage based on the ID provided. The version parameter must match the latest group coverage version.
     */
    editGroupCoverage(req: operations.EditGroupCoverageRequest, config?: AxiosRequestConfig): Promise<operations.EditGroupCoverageResponse>;
    /**
     * Get all Application Group Coverages
     *
     * @remarks
     * Returns a list of all group coverages for a given application
     */
    getApplicationGroupCoverages(req: operations.GetApplicationGroupCoveragesRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationGroupCoveragesResponse>;
    /**
     * Get Group Coverage
     *
     * @remarks
     * Returns the latest version of a single group coverage based on the ID provided.
     */
    getGroupCoverage(req: operations.GetGroupCoverageRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupCoverageResponse>;
}
