import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { TeamMemberWage } from "./teammemberwage";
/**
 * A response to a request to get a `TeamMemberWage`. The response contains
 *
 * @remarks
 * the requested `TeamMemberWage` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export declare class GetTeamMemberWageResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The hourly wage rate that a team member earns on a `Shift` for doing the job
     *
     * @remarks
     * specified by the `title` property of this object.
     */
    teamMemberWage?: TeamMemberWage;
}
