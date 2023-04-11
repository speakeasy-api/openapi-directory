import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FirewallActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all Actions for a Firewall
     *
     * @remarks
     * Returns all Action objects for a Firewall. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
     */
    getFirewallsIdActions(req: operations.GetFirewallsIdActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallsIdActionsResponse>;
    /**
     * Get an Action for a Firewall
     *
     * @remarks
     * Returns a specific Action for a Firewall.
     */
    getFirewallsIdActionsActionId(req: operations.GetFirewallsIdActionsActionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallsIdActionsActionIdResponse>;
    /**
     * Apply to Resources
     *
     * @remarks
     * Applies one Firewall to multiple resources.
     *
     * Currently servers (public network interface) and label selectors are supported.
     *
     * #### Call specific error codes
     *
     * | Code                          | Description                                                   |
     * |-------------------------------|---------------------------------------------------------------|
     * | `firewall_already_applied`    | Firewall was already applied on resource                      |
     * | `incompatible_network_type`   | The Network type is incompatible for the given resource       |
     * | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |
     *
     */
    postFirewallsIdActionsApplyToResources(req: operations.PostFirewallsIdActionsApplyToResourcesRequest, config?: AxiosRequestConfig): Promise<operations.PostFirewallsIdActionsApplyToResourcesResponse>;
    /**
     * Remove from Resources
     *
     * @remarks
     * Removes one Firewall from multiple resources.
     *
     * Currently only Servers (and their public network interfaces) are supported.
     *
     * #### Call specific error codes
     *
     * | Code                                  | Description                                                            |
     * |---------------------------------------|------------------------------------------------------------------------|
     * | `firewall_already_removed`            | Firewall was already removed from the resource                         |
     * | `firewall_resource_not_found`         | The resource the Firewall should be attached to was not found          |
     * | `firewall_managed_by_label_selector`  | Firewall was applied via label selector and cannot be removed manually |
     *
     */
    postFirewallsIdActionsRemoveFromResources(req: operations.PostFirewallsIdActionsRemoveFromResourcesRequest, config?: AxiosRequestConfig): Promise<operations.PostFirewallsIdActionsRemoveFromResourcesResponse>;
    /**
     * Set Rules
     *
     * @remarks
     * Sets the rules of a Firewall.
     *
     * All existing rules will be overwritten. Pass an empty `rules` array to remove all rules.
     * The maximum amount of rules that can be defined is 50.
     *
     * #### Call specific error codes
     *
     * | Code                          | Description                                                   |
     * |-------------------------------|---------------------------------------------------------------|
     * | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |
     *
     */
    postFirewallsIdActionsSetRules(req: operations.PostFirewallsIdActionsSetRulesRequest, config?: AxiosRequestConfig): Promise<operations.PostFirewallsIdActionsSetRulesResponse>;
}
