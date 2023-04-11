import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamAggregatesListRequest extends SpeakeasyBase {
    created?: string;
    createdGte?: string;
    createdLte?: string;
    dateAdded?: string;
    dateAddedGt?: string;
    dateAddedGte?: string;
    dateAddedLt?: string;
    dateAddedLte?: string;
    dateAddedN?: string;
    family?: number;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    lastUpdated?: string;
    lastUpdatedGte?: string;
    lastUpdatedLte?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    prefix?: string;
    q?: string;
    rir?: string;
    rirN?: string;
    rirId?: string;
    rirIdN?: string;
    tag?: string;
    tagN?: string;
}
export declare class IpamAggregatesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Aggregate[];
}
export declare class IpamAggregatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    ipamAggregatesList200ApplicationJSONObject?: IpamAggregatesList200ApplicationJSON;
}
