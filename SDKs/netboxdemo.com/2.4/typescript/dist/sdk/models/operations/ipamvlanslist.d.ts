import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamVlansListRequest extends SpeakeasyBase {
    group?: string;
    groupId?: string;
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
    q?: string;
    role?: string;
    roleId?: string;
    site?: string;
    siteId?: string;
    status?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
    vid?: number;
}
export declare class IpamVlansList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Vlan[];
}
export declare class IpamVlansListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    ipamVlansList200ApplicationJSONObject?: IpamVlansList200ApplicationJSON;
}
