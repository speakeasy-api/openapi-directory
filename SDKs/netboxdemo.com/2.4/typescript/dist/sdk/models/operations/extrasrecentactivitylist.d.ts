import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasRecentActivityListRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    user?: string;
    username?: string;
}
export declare class ExtrasRecentActivityList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.UserAction[];
}
export declare class ExtrasRecentActivityListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    extrasRecentActivityList200ApplicationJSONObject?: ExtrasRecentActivityList200ApplicationJSON;
}
