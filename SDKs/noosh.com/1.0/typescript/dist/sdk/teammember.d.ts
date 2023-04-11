import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TeamMember {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a team member for the specific project.
     *
     * @remarks
     * Delete a team member for the specific project.
     */
    deleteTeamMemberOfProject(req: operations.DeleteTeamMemberOfProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTeamMemberOfProjectResponse>;
    /**
     * List team member of client project side.
     *
     * @remarks
     * List team member of client project side.
     */
    getTeamMemberListOfClientProject(req: operations.GetTeamMemberListOfClientProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMemberListOfClientProjectResponse>;
    /**
     * List team member of project.
     *
     * @remarks
     * List team member of project.
     */
    getTeamMemberListOfProject(req: operations.GetTeamMemberListOfProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMemberListOfProjectResponse>;
    /**
     * Invite a team member or all the members of team template for the specific project.
     *
     * @remarks
     * Invite a team member or all the members of team template for the specific project.
     */
    postTeamMemberOfProjectJson(req: operations.PostTeamMemberOfProjectJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostTeamMemberOfProjectJsonResponse>;
    /**
     * Invite a team member or all the members of team template for the specific project.
     *
     * @remarks
     * Invite a team member or all the members of team template for the specific project.
     */
    postTeamMemberOfProjectRaw(req: operations.PostTeamMemberOfProjectRawRequest, config?: AxiosRequestConfig): Promise<operations.PostTeamMemberOfProjectRawResponse>;
    /**
     * Deprecated, please use 1.1 Version
     *
     * @remarks
     * Deprecated, please use 1.1 Version
     */
    postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJson(req: operations.PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJsonResponse>;
    /**
     * Deprecated, please use 1.1 Version
     *
     * @remarks
     * Deprecated, please use 1.1 Version
     */
    postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRaw(req: operations.PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRawResponse>;
}
