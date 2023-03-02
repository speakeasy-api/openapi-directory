import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cancelGroupApplication - Cancel a Group Application
     *
     * Cancels a group application to the carrier based on the ID provided.
    **/
    cancelGroupApplication(req: operations.CancelGroupApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CancelGroupApplicationResponse>;
    /**
     * createGroupApplication - Create new Group Application
     *
     * After creating a group, you can then create one or more new applications (one per carrier). Just pass the carrier ID and carrier group ID (if known) for the carrier associated with the application and the application type. The carrier group ID will allow us to reference the group in the carrier’s system if that has already been allocated.
    **/
    createGroupApplication(req: operations.CreateGroupApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupApplicationResponse>;
    /**
     * editGroupApplication - Edit a Group Application
     *
     * Edit a group application based on the ID provided. The version parameter must match the latest group application version.
    **/
    editGroupApplication(req: operations.EditGroupApplicationRequest, config?: AxiosRequestConfig): Promise<operations.EditGroupApplicationResponse>;
    /**
     * getAllApplications - Get All Applications
     *
     * Returns a list of all applications
    **/
    getAllApplications(req: operations.GetAllApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllApplicationsResponse>;
    /**
     * getGroupApplication - Get Group Application
     *
     * Returns the latest version of a single group application based on the ID provided.
    **/
    getGroupApplication(req: operations.GetGroupApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupApplicationResponse>;
    /**
     * getGroupApplications - Get Group Applications
     *
     * Returns a list of all applications for the given group
    **/
    getGroupApplications(req: operations.GetGroupApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupApplicationsResponse>;
    /**
     * submitGroupApplication - Submit a Group Application
     *
     * Submits a group application to the carrier based on the ID provided.
    **/
    submitGroupApplication(req: operations.SubmitGroupApplicationRequest, config?: AxiosRequestConfig): Promise<operations.SubmitGroupApplicationResponse>;
    /**
     * validateGroupApplication - Validate Group Application
     *
     * Returns a list of errors if the group application is not valid else an empty list is returned
    **/
    validateGroupApplication(req: operations.ValidateGroupApplicationRequest, config?: AxiosRequestConfig): Promise<operations.ValidateGroupApplicationResponse>;
}
