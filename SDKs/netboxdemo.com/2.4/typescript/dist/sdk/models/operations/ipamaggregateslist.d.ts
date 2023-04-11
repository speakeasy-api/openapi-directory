import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamAggregatesListRequest extends SpeakeasyBase {
    dateAdded?: string;
    family?: string;
    /**
     * Multiple values may be separated by commas.
     */
    idIn?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    q?: string;
    rir?: string;
    rirId?: string;
    tag?: string;
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
