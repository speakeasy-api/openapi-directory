import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupApplicationsPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetGroupApplicationsQueryParams extends SpeakeasyBase {
    applicationType?: string;
    carrierGroupId?: string;
    carrierId?: string;
    offset?: number;
    pageSize?: number;
    sortBy?: string;
    sortDirection?: string;
    status?: string;
}
export declare class GetGroupApplicationsRequest extends SpeakeasyBase {
    pathParams: GetGroupApplicationsPathParams;
    queryParams: GetGroupApplicationsQueryParams;
}
export declare class GetGroupApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    paginatedGroupApplicationResult?: shared.PaginatedGroupApplicationResult;
    statusCode: number;
}
