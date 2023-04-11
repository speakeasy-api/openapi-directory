import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEmployeeDependentsListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the employee in Noyo
     */
    employeeId: string;
    /**
     * The integer offset at which to start the page. Possible values are 0 to total_records - 1
     */
    offset?: number;
    /**
     * The max size of each page of results
     */
    pageSize?: number;
}
export declare class GetEmployeeDependentsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns all matching Dependents
     */
    paginatedDependentResult?: shared.PaginatedDependentResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
