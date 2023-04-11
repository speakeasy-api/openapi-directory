import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamPrefixesListRequest extends SpeakeasyBase {
    contains?: string;
    family?: string;
    /**
     * Multiple values may be separated by commas.
     */
    idIn?: string;
    isPool?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    maskLength?: number;
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
    vlanId?: string;
    vlanVid?: number;
    vrf?: string;
    vrfId?: string;
    within?: string;
    withinInclude?: string;
}
export declare class IpamPrefixesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Prefix[];
}
export declare class IpamPrefixesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    ipamPrefixesList200ApplicationJSONObject?: IpamPrefixesList200ApplicationJSON;
}
