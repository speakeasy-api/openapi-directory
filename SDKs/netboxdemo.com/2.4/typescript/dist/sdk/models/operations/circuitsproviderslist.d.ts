import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsProvidersListRequest extends SpeakeasyBase {
    account?: string;
    asn?: number;
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
    slug?: string;
    tag?: string;
}
export declare class CircuitsProvidersList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Provider[];
}
export declare class CircuitsProvidersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    circuitsProvidersList200ApplicationJSONObject?: CircuitsProvidersList200ApplicationJSON;
}
