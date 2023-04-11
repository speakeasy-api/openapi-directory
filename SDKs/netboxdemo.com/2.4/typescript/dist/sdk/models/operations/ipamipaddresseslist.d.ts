import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamIpAddressesListRequest extends SpeakeasyBase {
    address?: string;
    device?: string;
    deviceId?: number;
    family?: string;
    /**
     * Multiple values may be separated by commas.
     */
    idIn?: string;
    interfaceId?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    maskLength?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    parent?: string;
    q?: string;
    role?: string;
    status?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
    virtualMachine?: string;
    virtualMachineId?: string;
    vrf?: string;
    vrfId?: string;
}
export declare class IpamIpAddressesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.IPAddress[];
}
export declare class IpamIpAddressesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    ipamIpAddressesList200ApplicationJSONObject?: IpamIpAddressesList200ApplicationJSON;
}
