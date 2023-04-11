import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2SpotsSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
/**
 * The sort order of the list of spots, based on spot ID. If unspecified, the spots are returned in random order. If using paging to iterate through the results, sort order should be specified.
 */
export declare enum GetApiV2SpotsOrderByIDEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetApiV2SpotsRequest extends SpeakeasyBase {
    /**
     * The sort order of the list of spots, based on spot ID. If unspecified, the spots are returned in random order. If using paging to iterate through the results, sort order should be specified.
     */
    orderById?: GetApiV2SpotsOrderByIDEnum;
    /**
     * The number of items to return. Must be between 0 and 500, inclusive.
     */
    pageSize?: number;
    /**
     * The start page of the spot to return. The first item is indexed at 0.
     */
    pageStart?: number;
}
export declare class GetApiV2SpotsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authorization failed, or the user is not permitted to view these spots.
     */
    error?: shared.ErrorT;
    /**
     * The spots matching the query parameters
     */
    spots?: shared.Spot[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
