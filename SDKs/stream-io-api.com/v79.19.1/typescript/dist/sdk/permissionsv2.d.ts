import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PermissionsV2 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create role
     *
     * @remarks
     * Creates custom role
     */
    createRole(req: shared.CreateRoleRequest, config?: AxiosRequestConfig): Promise<operations.CreateRoleResponse>;
    /**
     * List permissions
     *
     * @remarks
     * Lists all available permissions
     */
    listPermissions(config?: AxiosRequestConfig): Promise<operations.ListPermissionsResponse>;
    /**
     * List roles
     *
     * @remarks
     * Lists all available roles
     */
    listRoles(config?: AxiosRequestConfig): Promise<operations.ListRolesResponse>;
}
