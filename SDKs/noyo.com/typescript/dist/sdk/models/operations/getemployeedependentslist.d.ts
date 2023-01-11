import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployeeDependentsListPathParams extends SpeakeasyBase {
    employeeId: string;
}
export declare class GetEmployeeDependentsListQueryParams extends SpeakeasyBase {
    offset?: number;
    pageSize?: number;
}
export declare class GetEmployeeDependentsListRequest extends SpeakeasyBase {
    pathParams: GetEmployeeDependentsListPathParams;
    queryParams: GetEmployeeDependentsListQueryParams;
}
export declare class GetEmployeeDependentsListResponse extends SpeakeasyBase {
    contentType: string;
    paginatedDependentResult?: shared.PaginatedDependentResult;
    statusCode: number;
}
