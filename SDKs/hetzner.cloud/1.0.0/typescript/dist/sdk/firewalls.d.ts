import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Firewalls can limit the network access to or from your resources.
 *
 * @remarks
 *
 * * When applying a firewall with no `in` rule all inbound traffic will be dropped. The default for `in` is `DROP`.
 * * When applying a firewall with no `out` rule all outbound traffic will be accepted. The default for `out` is `ACCEPT`.
 *
 */
export declare class Firewalls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Firewall
     *
     * @remarks
     * Deletes a Firewall.
     *
     * #### Call specific error codes
     *
     * | Code                 | Description                               |
     * |--------------------- |-------------------------------------------|
     * | `resource_in_use`    | Firewall must not be in use to be deleted |
     *
     */
    deleteFirewallsId(req: operations.DeleteFirewallsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallsIdResponse>;
    /**
     * Get all Firewalls
     *
     * @remarks
     * Returns all Firewall objects.
     */
    getFirewalls(req: operations.GetFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallsResponse>;
    /**
     * Get a Firewall
     *
     * @remarks
     * Gets a specific Firewall object.
     */
    getFirewallsId(req: operations.GetFirewallsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallsIdResponse>;
    /**
     * Create a Firewall
     *
     * @remarks
     * Creates a new Firewall.
     *
     * #### Call specific error codes
     *
     * | Code                          | Description                                                   |
     * |------------------------------ |-------------------------------------------------------------- |
     * | `server_already_added`        | Server added more than one time to resource                   |
     * | `incompatible_network_type`   | The Network type is incompatible for the given resource       |
     * | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |
     *
     */
    postFirewalls(req: operations.PostFirewallsCreateFirewallRequest, config?: AxiosRequestConfig): Promise<operations.PostFirewallsResponse>;
    /**
     * Update a Firewall
     *
     * @remarks
     * Updates the Firewall.
     *
     * Note that when updating labels, the Firewall's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     *
     * Note: if the Firewall object changes during the request, the response will be a “conflict” error.
     *
     */
    putFirewallsId(req: operations.PutFirewallsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutFirewallsIdResponse>;
}
