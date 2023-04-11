import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LoadBalancerActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all Actions for a Load Balancer
     *
     * @remarks
     * Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
     */
    getLoadBalancersIdActions(req: operations.GetLoadBalancersIdActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancersIdActionsResponse>;
    /**
     * Get an Action for a Load Balancer
     *
     * @remarks
     * Returns a specific Action for a Load Balancer.
     */
    getLoadBalancersIdActionsActionId(req: operations.GetLoadBalancersIdActionsActionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancersIdActionsActionIdResponse>;
    /**
     * Add Service
     *
     * @remarks
     * Adds a service to a Load Balancer.
     *
     * #### Call specific error codes
     *
     * | Code                       | Description                                             |
     * |----------------------------|---------------------------------------------------------|
     * | `source_port_already_used` | The source port you are trying to add is already in use |
     *
     */
    postLoadBalancersIdActionsAddService(req: operations.PostLoadBalancersIdActionsAddServiceRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersIdActionsAddServiceResponse>;
    /**
     * Add Target
     *
     * @remarks
     * Adds a target to a Load Balancer.
     *
     * #### Call specific error codes
     *
     * | Code                                    | Description                                                                                           |
     * |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
     * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
     * | `ip_not_owned`                          | The IP you are trying to add as a target is not owned by the Project owner                            |
     * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
     * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
     * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
     * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
     *
     */
    postLoadBalancersIdActionsAddTarget(req: operations.PostLoadBalancersIdActionsAddTargetRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersIdActionsAddTargetResponse>;
    /**
     * Attach a Load Balancer to a Network
     *
     * @remarks
     * Attach a Load Balancer to a Network.
     *
     * **Call specific error codes**
     *
     * | Code                             | Description                                                           |
     * |----------------------------------|-----------------------------------------------------------------------|
     * | `load_balancer_already_attached` | The Load Balancer is already attached to a network                    |
     * | `ip_not_available`               | The provided Network IP is not available                              |
     * | `no_subnet_available`            | No Subnet or IP is available for the Load Balancer within the network |
     *
     */
    postLoadBalancersIdActionsAttachToNetwork(req: operations.PostLoadBalancersIdActionsAttachToNetworkRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersIdActionsAttachToNetworkResponse>;
    /**
     * Change Algorithm
     *
     * @remarks
     * Change the algorithm that determines to which target new requests are sent.
     */
    postLoadBalancersIdActionsChangeAlgorithm(req: operations.PostLoadBalancersIdActionsChangeAlgorithmRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersIdActionsChangeAlgorithmResponse>;
    /**
     * Change reverse DNS entry for this Load Balancer
     *
     * @remarks
     * Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.
     *
     * Floating IPs assigned to the Server are not affected by this.
     *
     */
    postLoadBalancersIdActionsChangeDnsPtr(req: operations.PostLoadBalancersIdActionsChangeDnsPtrRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersIdActionsChangeDnsPtrResponse>;
    /**
     * Change Load Balancer Protection
     *
     * @remarks
     * Changes the protection configuration of a Load Balancer.
     */
    postLoadBalancersIdActionsChangeProtection(req: operations.PostLoadBalancersIdActionsChangeProtectionRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersIdActionsChangeProtectionResponse>;
    /**
     * Change the Type of a Load Balancer
     *
     * @remarks
     * Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.
     *
     * **Call specific error codes**
     *
     * | Code                         | Description                                                     |
     * |------------------------------|-----------------------------------------------------------------|
     * | `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |
     *
     */
    postLoadBalancersIdActionsChangeType(req: operations.PostLoadBalancersIdActionsChangeTypeRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersIdActionsChangeTypeResponse>;
    /**
     * Delete Service
     *
     * @remarks
     * Delete a service of a Load Balancer.
     */
    postLoadBalancersIdActionsDeleteService(req: operations.PostLoadBalancersIdActionsDeleteServiceRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersIdActionsDeleteServiceResponse>;
    /**
     * Detach a Load Balancer from a Network
     *
     * @remarks
     * Detaches a Load Balancer from a network.
     */
    postLoadBalancersIdActionsDetachFromNetwork(req: operations.PostLoadBalancersIdActionsDetachFromNetworkRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersIdActionsDetachFromNetworkResponse>;
    /**
     * Disable the public interface of a Load Balancer
     *
     * @remarks
     * Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.
     *
     * #### Call specific error codes
     *
     * | Code                                      | Description                                                                    |
     * |-------------------------------------------|--------------------------------------------------------------------------------|
     * | `load_balancer_not_attached_to_network`   |  The Load Balancer is not attached to a network                                |
     * | `targets_without_use_private_ip`          | The Load Balancer has targets that use the public IP instead of the private IP |
     *
     */
    postLoadBalancersIdActionsDisablePublicInterface(req: operations.PostLoadBalancersIdActionsDisablePublicInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersIdActionsDisablePublicInterfaceResponse>;
    /**
     * Enable the public interface of a Load Balancer
     *
     * @remarks
     * Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.
     */
    postLoadBalancersIdActionsEnablePublicInterface(req: operations.PostLoadBalancersIdActionsEnablePublicInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersIdActionsEnablePublicInterfaceResponse>;
    /**
     * Remove Target
     *
     * @remarks
     * Removes a target from a Load Balancer.
     */
    postLoadBalancersIdActionsRemoveTarget(req: operations.PostLoadBalancersIdActionsRemoveTargetRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersIdActionsRemoveTargetResponse>;
    /**
     * Update Service
     *
     * @remarks
     * Updates a Load Balancer Service.
     *
     * #### Call specific error codes
     *
     * | Code                       | Description                                             |
     * |----------------------------|---------------------------------------------------------|
     * | `source_port_already_used` | The source port you are trying to add is already in use |
     *
     */
    postLoadBalancersIdActionsUpdateService(req: operations.PostLoadBalancersIdActionsUpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.PostLoadBalancersIdActionsUpdateServiceResponse>;
}
