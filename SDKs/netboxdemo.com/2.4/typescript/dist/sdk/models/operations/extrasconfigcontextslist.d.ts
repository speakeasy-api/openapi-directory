import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasConfigContextsListRequest extends SpeakeasyBase {
    isActive?: string;
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
    regionId?: string;
    role?: string;
    roleId?: string;
    site?: string;
    siteId?: string;
    tenant?: string;
    tenantGroup?: string;
    tenantGroupId?: string;
    tenantId?: string;
}
export declare class ExtrasConfigContextsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ConfigContext[];
}
export declare class ExtrasConfigContextsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    extrasConfigContextsList200ApplicationJSONObject?: ExtrasConfigContextsList200ApplicationJSON;
}
