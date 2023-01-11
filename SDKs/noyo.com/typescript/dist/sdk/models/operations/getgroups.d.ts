import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupsQueryParams extends SpeakeasyBase {
    groupIds?: string;
    offset?: number;
    pageSize?: number;
}
export declare class GetGroupsRequest extends SpeakeasyBase {
    queryParams: GetGroupsQueryParams;
}
export declare class GetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    paginatedGroupResult?: shared.PaginatedGroupResult;
    statusCode: number;
}
