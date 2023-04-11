import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Virtualization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    virtualizationClusterGroupsCreate(req: shared.ClusterGroupInput, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterGroupsCreateResponse>;
    virtualizationClusterGroupsDelete(req: operations.VirtualizationClusterGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterGroupsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    virtualizationClusterGroupsList(req: operations.VirtualizationClusterGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterGroupsListResponse>;
    virtualizationClusterGroupsPartialUpdate(req: operations.VirtualizationClusterGroupsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterGroupsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    virtualizationClusterGroupsRead(req: operations.VirtualizationClusterGroupsReadRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterGroupsReadResponse>;
    virtualizationClusterGroupsUpdate(req: operations.VirtualizationClusterGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterGroupsUpdateResponse>;
    virtualizationClusterTypesCreate(req: shared.ClusterTypeInput, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterTypesCreateResponse>;
    virtualizationClusterTypesDelete(req: operations.VirtualizationClusterTypesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterTypesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    virtualizationClusterTypesList(req: operations.VirtualizationClusterTypesListRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterTypesListResponse>;
    virtualizationClusterTypesPartialUpdate(req: operations.VirtualizationClusterTypesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterTypesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    virtualizationClusterTypesRead(req: operations.VirtualizationClusterTypesReadRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterTypesReadResponse>;
    virtualizationClusterTypesUpdate(req: operations.VirtualizationClusterTypesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClusterTypesUpdateResponse>;
    virtualizationClustersCreate(req: shared.WritableClusterInput, config?: AxiosRequestConfig): Promise<operations.VirtualizationClustersCreateResponse>;
    virtualizationClustersDelete(req: operations.VirtualizationClustersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClustersDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    virtualizationClustersList(req: operations.VirtualizationClustersListRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClustersListResponse>;
    virtualizationClustersPartialUpdate(req: operations.VirtualizationClustersPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClustersPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    virtualizationClustersRead(req: operations.VirtualizationClustersReadRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClustersReadResponse>;
    virtualizationClustersUpdate(req: operations.VirtualizationClustersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationClustersUpdateResponse>;
    virtualizationInterfacesCreate(req: shared.WritableVirtualMachineInterfaceInput, config?: AxiosRequestConfig): Promise<operations.VirtualizationInterfacesCreateResponse>;
    virtualizationInterfacesDelete(req: operations.VirtualizationInterfacesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationInterfacesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    virtualizationInterfacesList(req: operations.VirtualizationInterfacesListRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationInterfacesListResponse>;
    virtualizationInterfacesPartialUpdate(req: operations.VirtualizationInterfacesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationInterfacesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    virtualizationInterfacesRead(req: operations.VirtualizationInterfacesReadRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationInterfacesReadResponse>;
    virtualizationInterfacesUpdate(req: operations.VirtualizationInterfacesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationInterfacesUpdateResponse>;
    virtualizationVirtualMachinesCreate(req: shared.WritableVirtualMachineWithConfigContextInput, config?: AxiosRequestConfig): Promise<operations.VirtualizationVirtualMachinesCreateResponse>;
    virtualizationVirtualMachinesDelete(req: operations.VirtualizationVirtualMachinesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationVirtualMachinesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    virtualizationVirtualMachinesList(req: operations.VirtualizationVirtualMachinesListRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationVirtualMachinesListResponse>;
    virtualizationVirtualMachinesPartialUpdate(req: operations.VirtualizationVirtualMachinesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationVirtualMachinesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    virtualizationVirtualMachinesRead(req: operations.VirtualizationVirtualMachinesReadRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationVirtualMachinesReadResponse>;
    virtualizationVirtualMachinesUpdate(req: operations.VirtualizationVirtualMachinesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.VirtualizationVirtualMachinesUpdateResponse>;
}
