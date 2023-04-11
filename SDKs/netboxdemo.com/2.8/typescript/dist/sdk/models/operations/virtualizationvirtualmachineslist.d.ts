import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationVirtualMachinesListRequest extends SpeakeasyBase {
    cluster?: string;
    clusterN?: string;
    clusterGroup?: string;
    clusterGroupN?: string;
    clusterGroupId?: string;
    clusterGroupIdN?: string;
    clusterId?: string;
    clusterIdN?: string;
    clusterType?: string;
    clusterTypeN?: string;
    clusterTypeId?: string;
    clusterTypeIdN?: string;
    created?: string;
    createdGte?: string;
    createdLte?: string;
    disk?: string;
    diskGt?: string;
    diskGte?: string;
    diskLt?: string;
    diskLte?: string;
    diskN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    lastUpdated?: string;
    lastUpdatedGte?: string;
    lastUpdatedLte?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    localContextData?: string;
    macAddress?: string;
    macAddressIc?: string;
    macAddressIe?: string;
    macAddressIew?: string;
    macAddressIsw?: string;
    macAddressN?: string;
    macAddressNic?: string;
    macAddressNie?: string;
    macAddressNiew?: string;
    macAddressNisw?: string;
    memory?: string;
    memoryGt?: string;
    memoryGte?: string;
    memoryLt?: string;
    memoryLte?: string;
    memoryN?: string;
    name?: string;
    nameIc?: string;
    nameIe?: string;
    nameIew?: string;
    nameIsw?: string;
    nameN?: string;
    nameNic?: string;
    nameNie?: string;
    nameNiew?: string;
    nameNisw?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    platform?: string;
    platformN?: string;
    platformId?: string;
    platformIdN?: string;
    q?: string;
    region?: string;
    regionN?: string;
    regionId?: string;
    regionIdN?: string;
    role?: string;
    roleN?: string;
    roleId?: string;
    roleIdN?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
    status?: string;
    statusN?: string;
    tag?: string;
    tagN?: string;
    tenant?: string;
    tenantN?: string;
    tenantGroup?: string;
    tenantGroupN?: string;
    tenantGroupId?: string;
    tenantGroupIdN?: string;
    tenantId?: string;
    tenantIdN?: string;
    vcpus?: string;
    vcpusGt?: string;
    vcpusGte?: string;
    vcpusLt?: string;
    vcpusLte?: string;
    vcpusN?: string;
}
export declare class VirtualizationVirtualMachinesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.VirtualMachineWithConfigContext[];
}
export declare class VirtualizationVirtualMachinesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    virtualizationVirtualMachinesList200ApplicationJSONObject?: VirtualizationVirtualMachinesList200ApplicationJSON;
}
