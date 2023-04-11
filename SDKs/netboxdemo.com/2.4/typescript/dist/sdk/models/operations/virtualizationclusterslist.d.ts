import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationClustersListRequest extends SpeakeasyBase {
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
    site?: string;
    siteId?: string;
    tag?: string;
    type?: string;
    typeId?: string;
}
export declare class VirtualizationClustersList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Cluster[];
}
export declare class VirtualizationClustersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    virtualizationClustersList200ApplicationJSONObject?: VirtualizationClustersList200ApplicationJSON;
}
