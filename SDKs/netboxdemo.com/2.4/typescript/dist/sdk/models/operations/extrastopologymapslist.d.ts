import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasTopologyMapsListRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    site?: string;
    siteId?: string;
    slug?: string;
}
export declare class ExtrasTopologyMapsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.TopologyMap[];
}
export declare class ExtrasTopologyMapsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    extrasTopologyMapsList200ApplicationJSONObject?: ExtrasTopologyMapsList200ApplicationJSON;
}
