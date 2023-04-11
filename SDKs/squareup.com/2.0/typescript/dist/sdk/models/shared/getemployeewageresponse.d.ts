import { SpeakeasyBase } from "../../../internal/utils";
import { EmployeeWage } from "./employeewage";
import { ErrorT } from "./error";
/**
 * A response to a request to get an `EmployeeWage`. The response contains
 *
 * @remarks
 * the requested `EmployeeWage` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export declare class GetEmployeeWageResponse extends SpeakeasyBase {
    /**
     * The hourly wage rate that an employee earns on a `Shift` for doing the job
     *
     * @remarks
     * specified by the `title` property of this object. Deprecated at version 2020-08-26. Use `TeamMemberWage` instead.
     */
    employeeWage?: EmployeeWage;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
