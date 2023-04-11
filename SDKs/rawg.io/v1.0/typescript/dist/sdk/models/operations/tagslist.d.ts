import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagsListRequest extends SpeakeasyBase {
    /**
     * A page number within the paginated result set.
     */
    page?: number;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
}
export declare class TagsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Tag[];
}
export declare class TagsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    tagsList200ApplicationJSONObject?: TagsList200ApplicationJSON;
}
