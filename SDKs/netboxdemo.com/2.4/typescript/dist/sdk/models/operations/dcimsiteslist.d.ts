import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimSitesListRequest extends SpeakeasyBase {
    asn?: number;
    contactEmail?: string;
    contactName?: string;
    contactPhone?: string;
    facility?: string;
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
    region?: string;
    regionId?: string;
    slug?: string;
    status?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
}
export declare class DcimSitesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Site[];
}
export declare class DcimSitesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimSitesList200ApplicationJSONObject?: DcimSitesList200ApplicationJSON;
}
