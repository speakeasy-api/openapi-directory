import { SpeakeasyBase } from "../../../internal/utils";
import { EmployeeResult } from "./employeeresult";
/**
 * Metadata associated with the response data
**/
export declare class PaginatedEmployeeResultMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class PaginatedEmployeeResult extends SpeakeasyBase {
    meta: PaginatedEmployeeResultMeta;
    response: EmployeeResult[];
}
