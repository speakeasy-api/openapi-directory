import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimVirtualChassisListRequest extends SpeakeasyBase {
    domain?: string;
    domainIc?: string;
    domainIe?: string;
    domainIew?: string;
    domainIsw?: string;
    domainN?: string;
    domainNic?: string;
    domainNie?: string;
    domainNiew?: string;
    domainNisw?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    q?: string;
    region?: string;
    regionN?: string;
    regionId?: string;
    regionIdN?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
    tag?: string;
    tagN?: string;
    tenant?: string;
    tenantN?: string;
    tenantId?: string;
    tenantIdN?: string;
}
export declare class DcimVirtualChassisList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.VirtualChassis[];
}
export declare class DcimVirtualChassisListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimVirtualChassisList200ApplicationJSONObject?: DcimVirtualChassisList200ApplicationJSON;
}
