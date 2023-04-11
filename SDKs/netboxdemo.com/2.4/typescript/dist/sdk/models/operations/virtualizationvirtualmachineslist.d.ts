import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationVirtualMachinesListRequest extends SpeakeasyBase {
    cluster?: string;
    clusterGroup?: string;
    clusterGroupId?: string;
    clusterId?: string;
    clusterType?: string;
    clusterTypeId?: string;
    /**
     * Multiple values may be separated by commas.
     */
    idIn?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    platform?: string;
    platformId?: string;
    q?: string;
    region?: string;
    regionId?: number;
    role?: string;
    roleId?: string;
    site?: string;
    siteId?: string;
    status?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
}
export declare class VirtualizationVirtualMachinesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.VirtualMachine[];
}
export declare class VirtualizationVirtualMachinesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    virtualizationVirtualMachinesList200ApplicationJSONObject?: VirtualizationVirtualMachinesList200ApplicationJSON;
}
