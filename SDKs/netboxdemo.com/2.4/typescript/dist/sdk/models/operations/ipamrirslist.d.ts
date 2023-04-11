import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamRirsListRequest extends SpeakeasyBase {
    /**
     * Multiple values may be separated by commas.
     */
    idIn?: string;
    isPrivate?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    slug?: string;
}
export declare class IpamRirsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Rir[];
}
export declare class IpamRirsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    ipamRirsList200ApplicationJSONObject?: IpamRirsList200ApplicationJSON;
}
