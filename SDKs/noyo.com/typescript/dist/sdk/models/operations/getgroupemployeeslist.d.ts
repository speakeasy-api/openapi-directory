import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupEmployeesListRequest extends SpeakeasyBase {
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
export declare class GetGroupEmployeesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns all matching Employees
     */
    paginatedEmployeeResult?: shared.PaginatedEmployeeResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
