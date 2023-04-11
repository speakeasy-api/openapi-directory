import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupsRequest extends SpeakeasyBase {
    /**
     * The comma separated list of group_ids to filter by
     */
    groupIds?: string;
    /**
     * The integer offset at which to start the page. Possible values are 0 to total_records - 1
     */
    offset?: number;
    /**
     * The max size of each page of results
     */
    pageSize?: number;
}
export declare class GetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns all matching Groups
     */
    paginatedGroupResult?: shared.PaginatedGroupResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
