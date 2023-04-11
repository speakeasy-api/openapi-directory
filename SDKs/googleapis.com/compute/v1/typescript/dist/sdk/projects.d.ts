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
     * Disable this project as a shared VPC host project.
     */
    computeProjectsDisableXpnHost(req: operations.ComputeProjectsDisableXpnHostRequest, security: operations.ComputeProjectsDisableXpnHostSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeProjectsDisableXpnHostResponse>;
    /**
     * Disable a service resource (also known as service project) associated with this host project.
     */
    computeProjectsDisableXpnResource(req: operations.ComputeProjectsDisableXpnResourceRequest, security: operations.ComputeProjectsDisableXpnResourceSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeProjectsDisableXpnResourceResponse>;
    /**
     * Enable this project as a shared VPC host project.
     */
    computeProjectsEnableXpnHost(req: operations.ComputeProjectsEnableXpnHostRequest, security: operations.ComputeProjectsEnableXpnHostSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeProjectsEnableXpnHostResponse>;
    /**
     * Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service project.
     */
    computeProjectsEnableXpnResource(req: operations.ComputeProjectsEnableXpnResourceRequest, security: operations.ComputeProjectsEnableXpnResourceSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeProjectsEnableXpnResourceResponse>;
    /**
     * Returns the specified Project resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.
     */
    computeProjectsGet(req: operations.ComputeProjectsGetRequest, security: operations.ComputeProjectsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeProjectsGetResponse>;
    /**
     * Gets the shared VPC host project that this project links to. May be empty if no link exists.
     */
    computeProjectsGetXpnHost(req: operations.ComputeProjectsGetXpnHostRequest, security: operations.ComputeProjectsGetXpnHostSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeProjectsGetXpnHostResponse>;
    /**
     * Gets service resources (a.k.a service project) associated with this host project.
     */
    computeProjectsGetXpnResources(req: operations.ComputeProjectsGetXpnResourcesRequest, security: operations.ComputeProjectsGetXpnResourcesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeProjectsGetXpnResourcesResponse>;
    /**
     * Lists all shared VPC host projects visible to the user in an organization.
     */
    computeProjectsListXpnHosts(req: operations.ComputeProjectsListXpnHostsRequest, security: operations.ComputeProjectsListXpnHostsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeProjectsListXpnHostsResponse>;
    /**
     * Moves a persistent disk from one zone to another.
     */
    computeProjectsMoveDisk(req: operations.ComputeProjectsMoveDiskRequest, security: operations.ComputeProjectsMoveDiskSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeProjectsMoveDiskResponse>;
    /**
     * Moves an instance and its attached persistent disks from one zone to another. *Note*: Moving VMs or disks by using this method might cause unexpected behavior. For more information, see the [known issue](/compute/docs/troubleshooting/known-issues#moving_vms_or_disks_using_the_moveinstance_api_or_the_causes_unexpected_behavior).
     */
    computeProjectsMoveInstance(req: operations.ComputeProjectsMoveInstanceRequest, security: operations.ComputeProjectsMoveInstanceSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeProjectsMoveInstanceResponse>;
    /**
     * Sets metadata common to all instances within the specified project using the data included in the request.
     */
    computeProjectsSetCommonInstanceMetadata(req: operations.ComputeProjectsSetCommonInstanceMetadataRequest, security: operations.ComputeProjectsSetCommonInstanceMetadataSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeProjectsSetCommonInstanceMetadataResponse>;
    /**
     * Sets the default network tier of the project. The default network tier is used when an address/forwardingRule/instance is created without specifying the network tier field.
     */
    computeProjectsSetDefaultNetworkTier(req: operations.ComputeProjectsSetDefaultNetworkTierRequest, security: operations.ComputeProjectsSetDefaultNetworkTierSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeProjectsSetDefaultNetworkTierResponse>;
    /**
     * Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.
     */
    computeProjectsSetUsageExportBucket(req: operations.ComputeProjectsSetUsageExportBucketRequest, security: operations.ComputeProjectsSetUsageExportBucketSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeProjectsSetUsageExportBucketResponse>;
}
