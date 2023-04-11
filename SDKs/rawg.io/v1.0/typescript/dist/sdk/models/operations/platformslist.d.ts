import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlatformsListRequest extends SpeakeasyBase {
    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    /**
     * A page number within the paginated result set.
     */
    page?: number;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
}
export declare class PlatformsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Platform[];
}
export declare class PlatformsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    platformsList200ApplicationJSONObject?: PlatformsList200ApplicationJSON;
}
