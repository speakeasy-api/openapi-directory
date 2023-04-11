import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * An object describing a job that a team member is assigned to.
 */
export declare class JobAssignment extends SpeakeasyBase {
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
    annualRate?: Money;
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
     * The title of the job.
     */
    jobTitle: string;
    /**
     * The current pay type for the job assignment used to
     *
     * @remarks
     * calculate the pay amount in a pay period.
     */
    payType: string;
    /**
     * The planned hours per week for the job. Set if the job `PayType` is `SALARY`.
     */
    weeklyHours?: number;
}
