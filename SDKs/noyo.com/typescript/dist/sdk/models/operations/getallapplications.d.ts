import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllApplicationsQueryParams extends SpeakeasyBase {
    applicationType?: string;
    carrierId?: string;
    groupId?: string;
    offset?: number;
    pageSize?: number;
    status?: string;
}
export declare class GetAllApplicationsRequest extends SpeakeasyBase {
    queryParams: GetAllApplicationsQueryParams;
}
export declare class GetAllApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    paginatedGroupApplicationResult?: shared.PaginatedGroupApplicationResult;
    statusCode: number;
}
