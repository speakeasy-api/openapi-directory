import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2SpotinsertionsSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
/**
 * The sort order of the list of spot insertions, based on ID. If unspecified, the spot insertions are returned in random order. If using paging to iterate through the results, sort order should be specified.
 */
export declare enum GetApiV2SpotinsertionsOrderByIDEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetApiV2SpotinsertionsRequest extends SpeakeasyBase {
    /**
     * The sort order of the list of spot insertions, based on ID. If unspecified, the spot insertions are returned in random order. If using paging to iterate through the results, sort order should be specified.
     */
    orderById?: GetApiV2SpotinsertionsOrderByIDEnum;
    /**
     * The number of items to return. Must be between 0 and 500, inclusive.
     */
    pageSize?: number;
    /**
     * The start page of the results to return. The first item is indexed at 0.
     */
    pageStart?: number;
}
export declare class GetApiV2SpotinsertionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authorization failed.
     */
    error?: shared.ErrorT;
    /**
     * The spot insertions matching the query parameters
     */
    spotInsertions?: shared.SpotInsertion[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
