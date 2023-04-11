import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRacksListRequest extends SpeakeasyBase {
    descUnits?: string;
    facilityId?: string;
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
    serial?: string;
    site?: string;
    siteId?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
    type?: string;
    uHeight?: number;
    width?: string;
}
export declare class DcimRacksList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Rack[];
}
export declare class DcimRacksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimRacksList200ApplicationJSONObject?: DcimRacksList200ApplicationJSON;
}
