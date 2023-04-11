import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { TeamMemberWage } from "./teammemberwage";
/**
 * The response to a request for a set of `TeamMemberWage` objects. The response contains
 *
 * @remarks
 * a set of `TeamMemberWage` objects.
 */
export declare class ListTeamMemberWagesResponse extends SpeakeasyBase {
    /**
     * The value supplied in the subsequent request to fetch the next page
     *
     * @remarks
     * of `TeamMemberWage` results.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * A page of `TeamMemberWage` results.
     */
    teamMemberWages?: TeamMemberWage[];
}
