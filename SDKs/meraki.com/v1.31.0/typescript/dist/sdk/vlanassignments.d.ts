import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VlanAssignments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
     *
     * @remarks
     * Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
     */
    getDeviceAppliancePrefixesDelegatedVlanAssignments(req: operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse>;
}
