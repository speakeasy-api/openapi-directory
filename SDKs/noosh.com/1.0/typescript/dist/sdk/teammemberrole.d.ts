import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TeamMemberRole {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all the role options for the user
     *
     * @remarks
     * List all the role options for the user
     */
    getMemberRoles(req: operations.GetMemberRolesRequest, config?: AxiosRequestConfig): Promise<operations.GetMemberRolesResponse>;
}
