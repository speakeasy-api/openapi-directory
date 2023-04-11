import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Floating IPs help you to create highly available setups. You can assign a Floating IP to any Server. The Server can then use this IP. You can reassign it to a different Server at any time, or you can choose to unassign the IP from Servers all together.
 *
 * @remarks
 *
 * Floating IPs can be used globally. This means you can assign a Floating IP to a Server in one Location and later reassign it to a Server in a different Location. For optimal routing and latency Floating IPs should be used in the Location they were created in.
 *
 * For Floating IPs to work with your Server, you must configure them inside your operation system.
 *
 * Floating IPs of type `ipv4` use a single IPv4 address as their `ip` property. Floating IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.
 *
 * Floating IPs are billed on a monthly basis.
 *
 */
export declare class FloatingIPs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Floating IP
     *
     * @remarks
     * Deletes a Floating IP. If it is currently assigned to a Server it will automatically get unassigned.
     */
    deleteFloatingIpsId(req: operations.DeleteFloatingIpsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFloatingIpsIdResponse>;
    /**
     * Get all Floating IPs
     *
     * @remarks
     * Returns all Floating IP objects.
     */
    getFloatingIps(req: operations.GetFloatingIpsRequest, config?: AxiosRequestConfig): Promise<operations.GetFloatingIpsResponse>;
    /**
     * Get a Floating IP
     *
     * @remarks
     * Returns a specific Floating IP object.
     */
    getFloatingIpsId(req: operations.GetFloatingIpsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFloatingIpsIdResponse>;
    /**
     * Create a Floating IP
     *
     * @remarks
     * Creates a new Floating IP assigned to a Server. If you want to create a Floating IP that is not bound to a Server, you need to provide the `home_location` key instead of `server`. This can be either the ID or the name of the Location this IP shall be created in. Note that a Floating IP can be assigned to a Server in any Location later on. For optimal routing it is advised to use the Floating IP in the same Location it was created in.
     */
    postFloatingIps(req: operations.PostFloatingIpsCreateFloatingIPRequest, config?: AxiosRequestConfig): Promise<operations.PostFloatingIpsResponse>;
    /**
     * Update a Floating IP
     *
     * @remarks
     * Updates the description or labels of a Floating IP.
     * Also note that when updating labels, the Floating IP’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     */
    putFloatingIpsId(req: operations.PutFloatingIpsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutFloatingIpsIdResponse>;
}
