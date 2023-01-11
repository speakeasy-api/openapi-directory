import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLocationListPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetLocationListQueryParams extends SpeakeasyBase {
    offset?: number;
    pageSize?: number;
}
export declare class GetLocationListRequest extends SpeakeasyBase {
    pathParams: GetLocationListPathParams;
    queryParams: GetLocationListQueryParams;
}
export declare class GetLocationListResponse extends SpeakeasyBase {
    contentType: string;
    paginatedLocationResult?: shared.PaginatedLocationResult;
    statusCode: number;
}
