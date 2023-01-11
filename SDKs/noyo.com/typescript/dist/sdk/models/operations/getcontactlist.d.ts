import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContactListPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetContactListQueryParams extends SpeakeasyBase {
    offset?: number;
    pageSize?: number;
}
export declare class GetContactListRequest extends SpeakeasyBase {
    pathParams: GetContactListPathParams;
    queryParams: GetContactListQueryParams;
}
export declare class GetContactListResponse extends SpeakeasyBase {
    contentType: string;
    paginatedContactResult?: shared.PaginatedContactResult;
    statusCode: number;
}
