import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupEmployeesListPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetGroupEmployeesListQueryParams extends SpeakeasyBase {
    offset?: number;
    pageSize?: number;
}
export declare class GetGroupEmployeesListRequest extends SpeakeasyBase {
    pathParams: GetGroupEmployeesListPathParams;
    queryParams: GetGroupEmployeesListQueryParams;
}
export declare class GetGroupEmployeesListResponse extends SpeakeasyBase {
    contentType: string;
    paginatedEmployeeResult?: shared.PaginatedEmployeeResult;
    statusCode: number;
}
