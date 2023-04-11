import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamVlanGroupsListRequest extends SpeakeasyBase {
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
export declare class IpamVlanGroupsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.VLANGroup[];
}
export declare class IpamVlanGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    ipamVlanGroupsList200ApplicationJSONObject?: IpamVlanGroupsList200ApplicationJSON;
}
