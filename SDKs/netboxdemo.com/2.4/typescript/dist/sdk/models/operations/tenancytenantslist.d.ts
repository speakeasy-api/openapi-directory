import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TenancyTenantsListRequest extends SpeakeasyBase {
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
    tag?: string;
}
export declare class TenancyTenantsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Tenant[];
}
export declare class TenancyTenantsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    tenancyTenantsList200ApplicationJSONObject?: TenancyTenantsList200ApplicationJSON;
}
