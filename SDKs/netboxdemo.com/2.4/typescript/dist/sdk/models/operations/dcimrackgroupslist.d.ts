import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRackGroupsListRequest extends SpeakeasyBase {
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
}
export declare class DcimRackGroupsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.RackGroup[];
}
export declare class DcimRackGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimRackGroupsList200ApplicationJSONObject?: DcimRackGroupsList200ApplicationJSON;
}
