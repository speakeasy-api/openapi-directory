import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Primary IPs help you to create more flexible networking setups. You can assign at most one Primary IP of type `ipv4` and one of type `ipv6` per Server. This Server then uses these IPs.
 *
 * @remarks
 *
 * You can only unassign a Primary IP from a Server when it's powered off. This Primary IP can then be assigned to a different powered off Server, or you can keep it around for later use.
 *
 * Primary IPs are bound to a specific Datacenter. You can not assign a Primary IP from one Datacenter to a Server in a different Datacenter. If you need this capability use Floating IPs instead.
 *
 * If your Server's operating system supports cloud-init there is no further configuration needed to make Primary IPs work.
 *
 * Primary IPs of type `ipv4` use a single IPv4 address as their `ip` property. Primary IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.
 *
 * Primary IPs are billed on an hourly basis.
 *
 */
export declare class PrimaryIPs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Primary IP
     *
     * @remarks
     * Deletes a Primary IP.
     *
     * The Primary IP may be assigned to a Server. In this case it is unassigned automatically. The Server must be powered off (status `off`) in order for this operation to succeed.
     *
     */
    deletePrimaryIpsId(req: operations.DeletePrimaryIpsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePrimaryIpsIdResponse>;
    /**
     * Get all Primary IPs
     *
     * @remarks
     * Returns all Primary IP objects.
     */
    getPrimaryIps(req: operations.GetPrimaryIpsRequest, config?: AxiosRequestConfig): Promise<operations.GetPrimaryIpsResponse>;
    /**
     * Get a Primary IP
     *
     * @remarks
     * Returns a specific Primary IP object.
     */
    getPrimaryIpsId(req: operations.GetPrimaryIpsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPrimaryIpsIdResponse>;
    /**
     * Create a Primary IP
     *
     * @remarks
     * Creates a new Primary IP, optionally assigned to a Server.
     *
     * If you want to create a Primary IP that is not assigned to a Server, you need to provide the `datacenter` key instead of `assignee_id`. This can be either the ID or the name of the Datacenter this Primary IP shall be created in.
     *
     * Note that a Primary IP can only be assigned to a Server in the same Datacenter later on.
     *
     * #### Call specific error codes
     *
     * | Code                          | Description                                                   |
     * |------------------------------ |-------------------------------------------------------------- |
     * | `server_not_stopped`          | The specified server is running, but needs to be powered off  |
     * | `server_has_ipv4`             | The server already has an ipv4 address                        |
     * | `server_has_ipv6`             | The server already has an ipv6 address                        |
     *
     */
    postPrimaryIps(req: operations.PostPrimaryIpsCreatePrimaryIPRequest, config?: AxiosRequestConfig): Promise<operations.PostPrimaryIpsResponse>;
    /**
     * Update a Primary IP
     *
     * @remarks
     * Updates the Primary IP.
     *
     * Note that when updating labels, the Primary IP's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     *
     * If the Primary IP object changes during the request, the response will be a “conflict” error.
     *
     */
    putPrimaryIpsId(req: operations.PutPrimaryIpsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutPrimaryIpsIdResponse>;
}
