import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * The hourly wage rate that an employee earns on a `Shift` for doing the job
 *
 * @remarks
 * specified by the `title` property of this object. Deprecated at version 2020-08-26. Use `TeamMemberWage` instead.
 */
export declare class EmployeeWage extends SpeakeasyBase {
    /**
     * The `Employee` that this wage is assigned to.
     */
    employeeId?: string;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    hourlyRate?: Money;
    /**
     * The UUID for this object.
     */
    id?: string;
    /**
     * The job title that this wage relates to.
     */
    title?: string;
}
