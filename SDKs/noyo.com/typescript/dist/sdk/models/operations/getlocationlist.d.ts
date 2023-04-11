import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLocationListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the group in Noyo
     */
    groupId: string;
    /**
     * The integer offset at which to start the page. Possible values are 0 to total_records - 1
     */
    offset?: number;
    /**
     * The max size of each page of results
     */
    pageSize?: number;
}
export declare class GetLocationListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns all matching Locations
     */
    paginatedLocationResult?: shared.PaginatedLocationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
