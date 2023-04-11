import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSourcesRequest extends SpeakeasyBase {
    /**
     * Filter for querying collections.
     */
    filter?: Record<string, any>;
    /**
     * The numbers of items to return per page.
     */
    limit?: number;
    /**
     * The number of items to skip before starting to collect the result set.
     */
    offset?: number;
    /**
     * The list of attribute and order to sort the result set by.
     */
    sortBy?: Record<string, any>;
}
export declare class ListSourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Sources collection
     */
    sourcesCollection?: shared.SourcesCollection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
