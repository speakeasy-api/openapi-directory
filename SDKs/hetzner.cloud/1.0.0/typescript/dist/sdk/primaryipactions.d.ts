import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PrimaryIPActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Assign a Primary IP to a resource
     *
     * @remarks
     * Assigns a Primary IP to a Server.
     *
     * A Server can only have one Primary IP of type `ipv4` and one of type `ipv6` assigned. If you need more IPs use Floating IPs.
     *
     * The Server must be powered off (status `off`) in order for this operation to succeed.
     *
     * #### Call specific error codes
     *
     * | Code                          | Description                                                   |
     * |------------------------------ |-------------------------------------------------------------- |
     * | `server_not_stopped`          | The server is running, but needs to be powered off            |
     * | `primary_ip_already_assigned` | Primary ip is already assigned to a different server          |
     * | `server_has_ipv4`             | The server already has an ipv4 address                        |
     * | `server_has_ipv6`             | The server already has an ipv6 address                        |
     *
     */
    postPrimaryIpsIdActionsAssign(req: operations.PostPrimaryIpsIdActionsAssignRequest, config?: AxiosRequestConfig): Promise<operations.PostPrimaryIpsIdActionsAssignResponse>;
    /**
     * Change reverse DNS entry for a Primary IP
     *
     * @remarks
     * Changes the hostname that will appear when getting the hostname belonging to this Primary IP.
     */
    postPrimaryIpsIdActionsChangeDnsPtr(req: operations.PostPrimaryIpsIdActionsChangeDnsPtrRequest, config?: AxiosRequestConfig): Promise<operations.PostPrimaryIpsIdActionsChangeDnsPtrResponse>;
    /**
     * Change Primary IP Protection
     *
     * @remarks
     * Changes the protection configuration of a Primary IP.
     *
     * A Primary IP can only be delete protected if its `auto_delete` property is set to `false`.
     *
     */
    postPrimaryIpsIdActionsChangeProtection(req: operations.PostPrimaryIpsIdActionsChangeProtectionRequest, config?: AxiosRequestConfig): Promise<operations.PostPrimaryIpsIdActionsChangeProtectionResponse>;
    /**
     * Unassign a Primary IP from a resource
     *
     * @remarks
     * Unassigns a Primary IP from a Server.
     *
     * The Server must be powered off (status `off`) in order for this operation to succeed.
     *
     * Note that only Servers that have at least one network interface (public or private) attached can be powered on.
     *
     * #### Call specific error codes
     *
     * | Code                              | Description                                                   |
     * |---------------------------------- |-------------------------------------------------------------- |
     * | `server_not_stopped`              | The server is running, but needs to be powered off            |
     * | `server_is_load_balancer_target`  | The server ipv4 address is a loadbalancer target              |
     *
     */
    postPrimaryIpsIdActionsUnassign(req: operations.PostPrimaryIpsIdActionsUnassignRequest, config?: AxiosRequestConfig): Promise<operations.PostPrimaryIpsIdActionsUnassignResponse>;
}
