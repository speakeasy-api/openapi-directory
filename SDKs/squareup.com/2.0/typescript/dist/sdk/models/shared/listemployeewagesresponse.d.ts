import { SpeakeasyBase } from "../../../internal/utils";
import { EmployeeWage } from "./employeewage";
import { ErrorT } from "./error";
/**
 * The response to a request for a set of `EmployeeWage` objects. The response contains
 *
 * @remarks
 * a set of `EmployeeWage` objects.
 */
export declare class ListEmployeeWagesResponse extends SpeakeasyBase {
    /**
     * The value supplied in the subsequent request to fetch the next page
     *
     * @remarks
     * of `EmployeeWage` results.
     */
    cursor?: string;
    /**
     * A page of `EmployeeWage` results.
     */
    employeeWages?: EmployeeWage[];
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
