import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents a team member's assignment to locations.
 */
export declare class TeamMemberAssignedLocations extends SpeakeasyBase {
    /**
     * The current assignment type of the team member.
     */
    assignmentType?: string;
    /**
     * The locations that the team member is assigned to.
     */
    locationIds?: string[];
}
