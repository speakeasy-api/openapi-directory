import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists subnetworks that can be used for creating clusters in a project.
     */
    containerProjectsAggregatedUsableSubnetworksList(req: operations.ContainerProjectsAggregatedUsableSubnetworksListRequest, security: operations.ContainerProjectsAggregatedUsableSubnetworksListSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsAggregatedUsableSubnetworksListResponse>;
    /**
     * Completes master IP rotation.
     */
    containerProjectsLocationsClustersCompleteIpRotation(req: operations.ContainerProjectsLocationsClustersCompleteIpRotationRequest, security: operations.ContainerProjectsLocationsClustersCompleteIpRotationSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersCompleteIpRotationResponse>;
    /**
     * Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
     */
    containerProjectsLocationsClustersCreate(req: operations.ContainerProjectsLocationsClustersCreateRequest, security: operations.ContainerProjectsLocationsClustersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersCreateResponse>;
    /**
     * Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
     */
    containerProjectsLocationsClustersGetJwks(req: operations.ContainerProjectsLocationsClustersGetJwksRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersGetJwksResponse>;
    /**
     * Lists all clusters owned by a project in either the specified zone or all zones.
     */
    containerProjectsLocationsClustersList(req: operations.ContainerProjectsLocationsClustersListRequest, security: operations.ContainerProjectsLocationsClustersListSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersListResponse>;
    /**
     * CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
     */
    containerProjectsLocationsClustersNodePoolsCompleteUpgrade(req: operations.ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeRequest, security: operations.ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeResponse>;
    /**
     * Creates a node pool for a cluster.
     */
    containerProjectsLocationsClustersNodePoolsCreate(req: operations.ContainerProjectsLocationsClustersNodePoolsCreateRequest, security: operations.ContainerProjectsLocationsClustersNodePoolsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsCreateResponse>;
    /**
     * Deletes a node pool from a cluster.
     */
    containerProjectsLocationsClustersNodePoolsDelete(req: operations.ContainerProjectsLocationsClustersNodePoolsDeleteRequest, security: operations.ContainerProjectsLocationsClustersNodePoolsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsDeleteResponse>;
    /**
     * Lists the node pools for a cluster.
     */
    containerProjectsLocationsClustersNodePoolsList(req: operations.ContainerProjectsLocationsClustersNodePoolsListRequest, security: operations.ContainerProjectsLocationsClustersNodePoolsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsListResponse>;
    /**
     * Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
     */
    containerProjectsLocationsClustersNodePoolsRollback(req: operations.ContainerProjectsLocationsClustersNodePoolsRollbackRequest, security: operations.ContainerProjectsLocationsClustersNodePoolsRollbackSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsRollbackResponse>;
    /**
     * Sets the autoscaling settings of a specific node pool.
     */
    containerProjectsLocationsClustersNodePoolsSetAutoscaling(req: operations.ContainerProjectsLocationsClustersNodePoolsSetAutoscalingRequest, security: operations.ContainerProjectsLocationsClustersNodePoolsSetAutoscalingSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsSetAutoscalingResponse>;
    /**
     * Sets the NodeManagement options for a node pool.
     */
    containerProjectsLocationsClustersNodePoolsSetManagement(req: operations.ContainerProjectsLocationsClustersNodePoolsSetManagementRequest, security: operations.ContainerProjectsLocationsClustersNodePoolsSetManagementSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsSetManagementResponse>;
    /**
     * SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
     */
    containerProjectsLocationsClustersNodePoolsSetSize(req: operations.ContainerProjectsLocationsClustersNodePoolsSetSizeRequest, security: operations.ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsSetSizeResponse>;
    /**
     * Updates the version and/or image type of a specific node pool.
     */
    containerProjectsLocationsClustersNodePoolsUpdate(req: operations.ContainerProjectsLocationsClustersNodePoolsUpdateRequest, security: operations.ContainerProjectsLocationsClustersNodePoolsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersNodePoolsUpdateResponse>;
    /**
     * Sets the addons for a specific cluster.
     */
    containerProjectsLocationsClustersSetAddons(req: operations.ContainerProjectsLocationsClustersSetAddonsRequest, security: operations.ContainerProjectsLocationsClustersSetAddonsSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetAddonsResponse>;
    /**
     * Enables or disables the ABAC authorization mechanism on a cluster.
     */
    containerProjectsLocationsClustersSetLegacyAbac(req: operations.ContainerProjectsLocationsClustersSetLegacyAbacRequest, security: operations.ContainerProjectsLocationsClustersSetLegacyAbacSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetLegacyAbacResponse>;
    /**
     * Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
     */
    containerProjectsLocationsClustersSetLocations(req: operations.ContainerProjectsLocationsClustersSetLocationsRequest, security: operations.ContainerProjectsLocationsClustersSetLocationsSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetLocationsResponse>;
    /**
     * Sets the logging service for a specific cluster.
     */
    containerProjectsLocationsClustersSetLogging(req: operations.ContainerProjectsLocationsClustersSetLoggingRequest, security: operations.ContainerProjectsLocationsClustersSetLoggingSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetLoggingResponse>;
    /**
     * Sets the maintenance policy for a cluster.
     */
    containerProjectsLocationsClustersSetMaintenancePolicy(req: operations.ContainerProjectsLocationsClustersSetMaintenancePolicyRequest, security: operations.ContainerProjectsLocationsClustersSetMaintenancePolicySecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetMaintenancePolicyResponse>;
    /**
     * Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
     */
    containerProjectsLocationsClustersSetMasterAuth(req: operations.ContainerProjectsLocationsClustersSetMasterAuthRequest, security: operations.ContainerProjectsLocationsClustersSetMasterAuthSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetMasterAuthResponse>;
    /**
     * Sets the monitoring service for a specific cluster.
     */
    containerProjectsLocationsClustersSetMonitoring(req: operations.ContainerProjectsLocationsClustersSetMonitoringRequest, security: operations.ContainerProjectsLocationsClustersSetMonitoringSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetMonitoringResponse>;
    /**
     * Enables or disables Network Policy for a cluster.
     */
    containerProjectsLocationsClustersSetNetworkPolicy(req: operations.ContainerProjectsLocationsClustersSetNetworkPolicyRequest, security: operations.ContainerProjectsLocationsClustersSetNetworkPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetNetworkPolicyResponse>;
    /**
     * Sets labels on a cluster.
     */
    containerProjectsLocationsClustersSetResourceLabels(req: operations.ContainerProjectsLocationsClustersSetResourceLabelsRequest, security: operations.ContainerProjectsLocationsClustersSetResourceLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersSetResourceLabelsResponse>;
    /**
     * Starts master IP rotation.
     */
    containerProjectsLocationsClustersStartIpRotation(req: operations.ContainerProjectsLocationsClustersStartIpRotationRequest, security: operations.ContainerProjectsLocationsClustersStartIpRotationSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersStartIpRotationResponse>;
    /**
     * Updates the master for a specific cluster.
     */
    containerProjectsLocationsClustersUpdateMaster(req: operations.ContainerProjectsLocationsClustersUpdateMasterRequest, security: operations.ContainerProjectsLocationsClustersUpdateMasterSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersUpdateMasterResponse>;
    /**
     * Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.
     */
    containerProjectsLocationsClustersWellKnownGetOpenidConfiguration(req: operations.ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse>;
    /**
     * Returns configuration info about the Google Kubernetes Engine service.
     */
    containerProjectsLocationsGetServerConfig(req: operations.ContainerProjectsLocationsGetServerConfigRequest, security: operations.ContainerProjectsLocationsGetServerConfigSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsGetServerConfigResponse>;
    /**
     * Fetches locations that offer Google Kubernetes Engine.
     */
    containerProjectsLocationsList(req: operations.ContainerProjectsLocationsListRequest, security: operations.ContainerProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsListResponse>;
    /**
     * Cancels the specified operation.
     */
    containerProjectsLocationsOperationsCancel(req: operations.ContainerProjectsLocationsOperationsCancelRequest, security: operations.ContainerProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsOperationsCancelResponse>;
    /**
     * Gets the specified operation.
     */
    containerProjectsLocationsOperationsGet(req: operations.ContainerProjectsLocationsOperationsGetRequest, security: operations.ContainerProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsOperationsGetResponse>;
    /**
     * Lists all operations in a project in the specified zone or all zones.
     */
    containerProjectsLocationsOperationsList(req: operations.ContainerProjectsLocationsOperationsListRequest, security: operations.ContainerProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsLocationsOperationsListResponse>;
    /**
     * Sets the addons for a specific cluster.
     */
    containerProjectsZonesClustersAddons(req: operations.ContainerProjectsZonesClustersAddonsRequest, security: operations.ContainerProjectsZonesClustersAddonsSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersAddonsResponse>;
    /**
     * Completes master IP rotation.
     */
    containerProjectsZonesClustersCompleteIpRotation(req: operations.ContainerProjectsZonesClustersCompleteIpRotationRequest, security: operations.ContainerProjectsZonesClustersCompleteIpRotationSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersCompleteIpRotationResponse>;
    /**
     * Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
     */
    containerProjectsZonesClustersCreate(req: operations.ContainerProjectsZonesClustersCreateRequest, security: operations.ContainerProjectsZonesClustersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersCreateResponse>;
    /**
     * Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
     */
    containerProjectsZonesClustersDelete(req: operations.ContainerProjectsZonesClustersDeleteRequest, security: operations.ContainerProjectsZonesClustersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersDeleteResponse>;
    /**
     * Gets the details for a specific cluster.
     */
    containerProjectsZonesClustersGet(req: operations.ContainerProjectsZonesClustersGetRequest, security: operations.ContainerProjectsZonesClustersGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersGetResponse>;
    /**
     * Enables or disables the ABAC authorization mechanism on a cluster.
     */
    containerProjectsZonesClustersLegacyAbac(req: operations.ContainerProjectsZonesClustersLegacyAbacRequest, security: operations.ContainerProjectsZonesClustersLegacyAbacSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersLegacyAbacResponse>;
    /**
     * Lists all clusters owned by a project in either the specified zone or all zones.
     */
    containerProjectsZonesClustersList(req: operations.ContainerProjectsZonesClustersListRequest, security: operations.ContainerProjectsZonesClustersListSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersListResponse>;
    /**
     * Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
     */
    containerProjectsZonesClustersLocations(req: operations.ContainerProjectsZonesClustersLocationsRequest, security: operations.ContainerProjectsZonesClustersLocationsSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersLocationsResponse>;
    /**
     * Sets the logging service for a specific cluster.
     */
    containerProjectsZonesClustersLogging(req: operations.ContainerProjectsZonesClustersLoggingRequest, security: operations.ContainerProjectsZonesClustersLoggingSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersLoggingResponse>;
    /**
     * Updates the master for a specific cluster.
     */
    containerProjectsZonesClustersMaster(req: operations.ContainerProjectsZonesClustersMasterRequest, security: operations.ContainerProjectsZonesClustersMasterSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersMasterResponse>;
    /**
     * Sets the monitoring service for a specific cluster.
     */
    containerProjectsZonesClustersMonitoring(req: operations.ContainerProjectsZonesClustersMonitoringRequest, security: operations.ContainerProjectsZonesClustersMonitoringSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersMonitoringResponse>;
    /**
     * Sets the autoscaling settings of a specific node pool.
     */
    containerProjectsZonesClustersNodePoolsAutoscaling(req: operations.ContainerProjectsZonesClustersNodePoolsAutoscalingRequest, security: operations.ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsAutoscalingResponse>;
    /**
     * Creates a node pool for a cluster.
     */
    containerProjectsZonesClustersNodePoolsCreate(req: operations.ContainerProjectsZonesClustersNodePoolsCreateRequest, security: operations.ContainerProjectsZonesClustersNodePoolsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsCreateResponse>;
    /**
     * Deletes a node pool from a cluster.
     */
    containerProjectsZonesClustersNodePoolsDelete(req: operations.ContainerProjectsZonesClustersNodePoolsDeleteRequest, security: operations.ContainerProjectsZonesClustersNodePoolsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsDeleteResponse>;
    /**
     * Retrieves the requested node pool.
     */
    containerProjectsZonesClustersNodePoolsGet(req: operations.ContainerProjectsZonesClustersNodePoolsGetRequest, security: operations.ContainerProjectsZonesClustersNodePoolsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsGetResponse>;
    /**
     * Lists the node pools for a cluster.
     */
    containerProjectsZonesClustersNodePoolsList(req: operations.ContainerProjectsZonesClustersNodePoolsListRequest, security: operations.ContainerProjectsZonesClustersNodePoolsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsListResponse>;
    /**
     * Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
     */
    containerProjectsZonesClustersNodePoolsRollback(req: operations.ContainerProjectsZonesClustersNodePoolsRollbackRequest, security: operations.ContainerProjectsZonesClustersNodePoolsRollbackSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsRollbackResponse>;
    /**
     * Sets the NodeManagement options for a node pool.
     */
    containerProjectsZonesClustersNodePoolsSetManagement(req: operations.ContainerProjectsZonesClustersNodePoolsSetManagementRequest, security: operations.ContainerProjectsZonesClustersNodePoolsSetManagementSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsSetManagementResponse>;
    /**
     * SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
     */
    containerProjectsZonesClustersNodePoolsSetSize(req: operations.ContainerProjectsZonesClustersNodePoolsSetSizeRequest, security: operations.ContainerProjectsZonesClustersNodePoolsSetSizeSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsSetSizeResponse>;
    /**
     * Updates the version and/or image type of a specific node pool.
     */
    containerProjectsZonesClustersNodePoolsUpdate(req: operations.ContainerProjectsZonesClustersNodePoolsUpdateRequest, security: operations.ContainerProjectsZonesClustersNodePoolsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersNodePoolsUpdateResponse>;
    /**
     * Sets labels on a cluster.
     */
    containerProjectsZonesClustersResourceLabels(req: operations.ContainerProjectsZonesClustersResourceLabelsRequest, security: operations.ContainerProjectsZonesClustersResourceLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersResourceLabelsResponse>;
    /**
     * Sets the maintenance policy for a cluster.
     */
    containerProjectsZonesClustersSetMaintenancePolicy(req: operations.ContainerProjectsZonesClustersSetMaintenancePolicyRequest, security: operations.ContainerProjectsZonesClustersSetMaintenancePolicySecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersSetMaintenancePolicyResponse>;
    /**
     * Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
     */
    containerProjectsZonesClustersSetMasterAuth(req: operations.ContainerProjectsZonesClustersSetMasterAuthRequest, security: operations.ContainerProjectsZonesClustersSetMasterAuthSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersSetMasterAuthResponse>;
    /**
     * Enables or disables Network Policy for a cluster.
     */
    containerProjectsZonesClustersSetNetworkPolicy(req: operations.ContainerProjectsZonesClustersSetNetworkPolicyRequest, security: operations.ContainerProjectsZonesClustersSetNetworkPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersSetNetworkPolicyResponse>;
    /**
     * Starts master IP rotation.
     */
    containerProjectsZonesClustersStartIpRotation(req: operations.ContainerProjectsZonesClustersStartIpRotationRequest, security: operations.ContainerProjectsZonesClustersStartIpRotationSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersStartIpRotationResponse>;
    /**
     * Updates the settings for a specific cluster.
     */
    containerProjectsZonesClustersUpdate(req: operations.ContainerProjectsZonesClustersUpdateRequest, security: operations.ContainerProjectsZonesClustersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesClustersUpdateResponse>;
    /**
     * Returns configuration info about the Google Kubernetes Engine service.
     */
    containerProjectsZonesGetServerconfig(req: operations.ContainerProjectsZonesGetServerconfigRequest, security: operations.ContainerProjectsZonesGetServerconfigSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesGetServerconfigResponse>;
    /**
     * Cancels the specified operation.
     */
    containerProjectsZonesOperationsCancel(req: operations.ContainerProjectsZonesOperationsCancelRequest, security: operations.ContainerProjectsZonesOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesOperationsCancelResponse>;
    /**
     * Gets the specified operation.
     */
    containerProjectsZonesOperationsGet(req: operations.ContainerProjectsZonesOperationsGetRequest, security: operations.ContainerProjectsZonesOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesOperationsGetResponse>;
    /**
     * Lists all operations in a project in the specified zone or all zones.
     */
    containerProjectsZonesOperationsList(req: operations.ContainerProjectsZonesOperationsListRequest, security: operations.ContainerProjectsZonesOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContainerProjectsZonesOperationsListResponse>;
}
