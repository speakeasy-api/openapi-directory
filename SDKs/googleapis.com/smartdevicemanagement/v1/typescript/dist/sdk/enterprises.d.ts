import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Enterprises {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Executes a command to device managed by the enterprise.
     */
    smartdevicemanagementEnterprisesDevicesExecuteCommand(req: operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest, security: operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse>;
    /**
     * Lists devices managed by the enterprise.
     */
    smartdevicemanagementEnterprisesDevicesList(req: operations.SmartdevicemanagementEnterprisesDevicesListRequest, security: operations.SmartdevicemanagementEnterprisesDevicesListSecurity, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesDevicesListResponse>;
    /**
     * Lists structures managed by the enterprise.
     */
    smartdevicemanagementEnterprisesStructuresList(req: operations.SmartdevicemanagementEnterprisesStructuresListRequest, security: operations.SmartdevicemanagementEnterprisesStructuresListSecurity, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesStructuresListResponse>;
    /**
     * Gets a room managed by the enterprise.
     */
    smartdevicemanagementEnterprisesStructuresRoomsGet(req: operations.SmartdevicemanagementEnterprisesStructuresRoomsGetRequest, security: operations.SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesStructuresRoomsGetResponse>;
    /**
     * Lists rooms managed by the enterprise.
     */
    smartdevicemanagementEnterprisesStructuresRoomsList(req: operations.SmartdevicemanagementEnterprisesStructuresRoomsListRequest, security: operations.SmartdevicemanagementEnterprisesStructuresRoomsListSecurity, config?: AxiosRequestConfig): Promise<operations.SmartdevicemanagementEnterprisesStructuresRoomsListResponse>;
}
