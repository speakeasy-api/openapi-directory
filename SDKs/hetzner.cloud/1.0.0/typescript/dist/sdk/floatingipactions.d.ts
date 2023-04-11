import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FloatingIPActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all Actions for a Floating IP
     *
     * @remarks
     * Returns all Action objects for a Floating IP. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
     */
    getFloatingIpsIdActions(req: operations.GetFloatingIpsIdActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetFloatingIpsIdActionsResponse>;
    /**
     * Get an Action for a Floating IP
     *
     * @remarks
     * Returns a specific Action object for a Floating IP.
     */
    getFloatingIpsIdActionsActionId(req: operations.GetFloatingIpsIdActionsActionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFloatingIpsIdActionsActionIdResponse>;
    /**
     * Assign a Floating IP to a Server
     *
     * @remarks
     * Assigns a Floating IP to a Server.
     */
    postFloatingIpsIdActionsAssign(req: operations.PostFloatingIpsIdActionsAssignRequest, config?: AxiosRequestConfig): Promise<operations.PostFloatingIpsIdActionsAssignResponse>;
    /**
     * Change reverse DNS entry for a Floating IP
     *
     * @remarks
     * Changes the hostname that will appear when getting the hostname belonging to this Floating IP.
     */
    postFloatingIpsIdActionsChangeDnsPtr(req: operations.PostFloatingIpsIdActionsChangeDnsPtrRequest, config?: AxiosRequestConfig): Promise<operations.PostFloatingIpsIdActionsChangeDnsPtrResponse>;
    /**
     * Change Floating IP Protection
     *
     * @remarks
     * Changes the protection configuration of the Floating IP.
     */
    postFloatingIpsIdActionsChangeProtection(req: operations.PostFloatingIpsIdActionsChangeProtectionRequest, config?: AxiosRequestConfig): Promise<operations.PostFloatingIpsIdActionsChangeProtectionResponse>;
    /**
     * Unassign a Floating IP
     *
     * @remarks
     * Unassigns a Floating IP, resulting in it being unreachable. You may assign it to a Server again at a later time.
     */
    postFloatingIpsIdActionsUnassign(req: operations.PostFloatingIpsIdActionsUnassignRequest, config?: AxiosRequestConfig): Promise<operations.PostFloatingIpsIdActionsUnassignResponse>;
}
