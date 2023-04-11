import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one resource by id.
     */
    groupsSettingsGroupsGet(req: operations.GroupsSettingsGroupsGetRequest, security: operations.GroupsSettingsGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.GroupsSettingsGroupsGetResponse>;
    /**
     * Updates an existing resource. This method supports patch semantics.
     */
    groupsSettingsGroupsPatch(req: operations.GroupsSettingsGroupsPatchRequest, security: operations.GroupsSettingsGroupsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.GroupsSettingsGroupsPatchResponse>;
    /**
     * Updates an existing resource.
     */
    groupsSettingsGroupsUpdate(req: operations.GroupsSettingsGroupsUpdateRequest, security: operations.GroupsSettingsGroupsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.GroupsSettingsGroupsUpdateResponse>;
}
