import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.
     */
    servicenetworkingServicesAddSubnetwork(req: operations.ServicenetworkingServicesAddSubnetworkRequest, security: operations.ServicenetworkingServicesAddSubnetworkSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesAddSubnetworkResponse>;
    /**
     * Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once.
     */
    servicenetworkingServicesConnectionsCreate(req: operations.ServicenetworkingServicesConnectionsCreateRequest, security: operations.ServicenetworkingServicesConnectionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesConnectionsCreateResponse>;
    /**
     * Deletes a private service access connection.
     */
    servicenetworkingServicesConnectionsDeleteConnection(req: operations.ServicenetworkingServicesConnectionsDeleteConnectionRequest, security: operations.ServicenetworkingServicesConnectionsDeleteConnectionSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesConnectionsDeleteConnectionResponse>;
    /**
     * List the private connections that are configured in a service consumer's VPC network.
     */
    servicenetworkingServicesConnectionsList(req: operations.ServicenetworkingServicesConnectionsListRequest, security: operations.ServicenetworkingServicesConnectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesConnectionsListResponse>;
    /**
     * Updates the allocated ranges that are assigned to a connection.
     */
    servicenetworkingServicesConnectionsPatch(req: operations.ServicenetworkingServicesConnectionsPatchRequest, security: operations.ServicenetworkingServicesConnectionsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesConnectionsPatchResponse>;
    /**
     * Disables VPC service controls for a connection.
     */
    servicenetworkingServicesDisableVpcServiceControls(req: operations.ServicenetworkingServicesDisableVpcServiceControlsRequest, security: operations.ServicenetworkingServicesDisableVpcServiceControlsSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesDisableVpcServiceControlsResponse>;
    /**
     * Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.
     */
    servicenetworkingServicesDnsRecordSetsAdd(req: operations.ServicenetworkingServicesDnsRecordSetsAddRequest, security: operations.ServicenetworkingServicesDnsRecordSetsAddSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesDnsRecordSetsAddResponse>;
    /**
     * Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.
     */
    servicenetworkingServicesDnsRecordSetsRemove(req: operations.ServicenetworkingServicesDnsRecordSetsRemoveRequest, security: operations.ServicenetworkingServicesDnsRecordSetsRemoveSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesDnsRecordSetsRemoveResponse>;
    /**
     * Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.
     */
    servicenetworkingServicesDnsRecordSetsUpdate(req: operations.ServicenetworkingServicesDnsRecordSetsUpdateRequest, security: operations.ServicenetworkingServicesDnsRecordSetsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesDnsRecordSetsUpdateResponse>;
    /**
     * Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.
     */
    servicenetworkingServicesDnsZonesAdd(req: operations.ServicenetworkingServicesDnsZonesAddRequest, security: operations.ServicenetworkingServicesDnsZonesAddSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesDnsZonesAddResponse>;
    /**
     * Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.
     */
    servicenetworkingServicesDnsZonesRemove(req: operations.ServicenetworkingServicesDnsZonesRemoveRequest, security: operations.ServicenetworkingServicesDnsZonesRemoveSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesDnsZonesRemoveResponse>;
    /**
     * Enables VPC service controls for a connection.
     */
    servicenetworkingServicesEnableVpcServiceControls(req: operations.ServicenetworkingServicesEnableVpcServiceControlsRequest, security: operations.ServicenetworkingServicesEnableVpcServiceControlsSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesEnableVpcServiceControlsResponse>;
    /**
     * Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
     */
    servicenetworkingServicesProjectsGlobalNetworksGet(req: operations.ServicenetworkingServicesProjectsGlobalNetworksGetRequest, security: operations.ServicenetworkingServicesProjectsGlobalNetworksGetSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesProjectsGlobalNetworksGetResponse>;
    /**
     * Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.
     */
    servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreate(req: operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest, security: operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateResponse>;
    /**
     * Deletes a peered DNS domain.
     */
    servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDelete(req: operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest, security: operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteResponse>;
    /**
     * Lists peered DNS domains for a connection.
     */
    servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsList(req: operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest, security: operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListResponse>;
    /**
     * Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
     */
    servicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfig(req: operations.ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest, security: operations.ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigResponse>;
    /**
     * Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set of roles. Each role is applied at only the granularity specified in the allowlist.
     */
    servicenetworkingServicesRolesAdd(req: operations.ServicenetworkingServicesRolesAddRequest, security: operations.ServicenetworkingServicesRolesAddSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesRolesAddResponse>;
    /**
     * Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).
     */
    servicenetworkingServicesSearchRange(req: operations.ServicenetworkingServicesSearchRangeRequest, security: operations.ServicenetworkingServicesSearchRangeSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesSearchRangeResponse>;
    /**
     * Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.
     */
    servicenetworkingServicesValidate(req: operations.ServicenetworkingServicesValidateRequest, security: operations.ServicenetworkingServicesValidateSecurity, config?: AxiosRequestConfig): Promise<operations.ServicenetworkingServicesValidateResponse>;
}
