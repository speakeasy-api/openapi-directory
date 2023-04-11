import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamPrefixesListRequest extends SpeakeasyBase {
    contains?: string;
    created?: string;
    createdGte?: string;
    createdLte?: string;
    family?: number;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    isPool?: string;
    lastUpdated?: string;
    lastUpdatedGte?: string;
    lastUpdatedLte?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    maskLength?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    prefix?: string;
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
    vlanId?: string;
    vlanIdN?: string;
    vlanVid?: number;
    vrf?: string;
    vrfN?: string;
    vrfId?: string;
    vrfIdN?: string;
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
