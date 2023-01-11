import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MemberElections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createMemberElection - Create new Member Election
     *
     * Create a new member election for an coverage plan
    **/
    createMemberElection(req: operations.CreateMemberElectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateMemberElectionResponse>;
    /**
     * editMemberElection - Edit a Member Election
     *
     * Edit a member election based on the ID provided. The version parameter must match the latest member election version.
    **/
    editMemberElection(req: operations.EditMemberElectionRequest, config?: AxiosRequestConfig): Promise<operations.EditMemberElectionResponse>;
    /**
     * getApplicationMemberElections - Get all Application Member Elections
     *
     * Returns a list of all member elections for a given application
    **/
    getApplicationMemberElections(req: operations.GetApplicationMemberElectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationMemberElectionsResponse>;
    /**
     * getCoveragePlanMemberElections - Get all Coverage Plan Member Elections
     *
     * Returns a list of all member elections for a given coverage plan
    **/
    getCoveragePlanMemberElections(req: operations.GetCoveragePlanMemberElectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCoveragePlanMemberElectionsResponse>;
    /**
     * getMemberElection - Get a Member Election
     *
     * Returns a member election.
    **/
    getMemberElection(req: operations.GetMemberElectionRequest, config?: AxiosRequestConfig): Promise<operations.GetMemberElectionResponse>;
}
