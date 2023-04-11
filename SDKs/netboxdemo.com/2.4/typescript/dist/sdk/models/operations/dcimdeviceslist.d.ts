import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDevicesListRequest extends SpeakeasyBase {
    assetTag?: string;
    clusterId?: string;
    deviceTypeId?: string;
    hasPrimaryIp?: string;
    /**
     * Multiple values may be separated by commas.
     */
    idIn?: string;
    isConsoleServer?: string;
    isFullDepth?: string;
    isNetworkDevice?: string;
    isPdu?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    macAddress?: string;
    manufacturer?: string;
    manufacturerId?: string;
    model?: string;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    platform?: string;
    platformId?: string;
    position?: number;
    q?: string;
    rackGroupId?: string;
    rackId?: string;
    region?: string;
    regionId?: number;
    role?: string;
    roleId?: string;
    serial?: string;
    site?: string;
    siteId?: string;
    status?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
    virtualChassisId?: string;
}
export declare class DcimDevicesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Device[];
}
export declare class DcimDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimDevicesList200ApplicationJSONObject?: DcimDevicesList200ApplicationJSON;
}
