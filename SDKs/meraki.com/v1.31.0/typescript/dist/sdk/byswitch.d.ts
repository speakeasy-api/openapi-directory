import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BySwitch {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the switchports in an organization by switch
     *
     * @remarks
     * List the switchports in an organization by switch
     */
    getOrganizationSwitchPortsBySwitch(req: operations.GetOrganizationSwitchPortsBySwitchRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSwitchPortsBySwitchResponse>;
}
