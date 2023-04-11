import { SpeakeasyBase } from "../../../internal/utils";
import { TeamMemberAssignedLocations } from "./teammemberassignedlocations";
/**
 * A record representing an individual team member for a business.
 */
export declare class TeamMember extends SpeakeasyBase {
    /**
     * An object that represents a team member's assignment to locations.
     */
    assignedLocations?: TeamMemberAssignedLocations;
    /**
     * The timestamp, in RFC 3339 format, describing when the team member was created.
     *
     * @remarks
     * For example, "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z".
     */
    createdAt?: string;
    /**
     * The email address associated with the team member.
     */
    emailAddress?: string;
    /**
     * The family name (that is, the last name) associated with the team member.
     */
    familyName?: string;
    /**
     * The given name (that is, the first name) associated with the team member.
     */
    givenName?: string;
    /**
     * The unique ID for the team member.
     */
    id?: string;
    /**
     * Whether the team member is the owner of the Square account.
     */
    isOwner?: boolean;
    /**
     * The team member's phone number, in E.164 format. For example:
     *
     * @remarks
     * +14155552671 - the country code is 1 for US
     * +551155256325 - the country code is 55 for BR
     */
    phoneNumber?: string;
    /**
     * A second ID used to associate the team member with an entity in another system.
     */
    referenceId?: string;
    /**
     * Describes the status of the team member.
     */
    status?: string;
    /**
     * The timestamp, in RFC 3339 format, describing when the team member was last updated.
     *
     * @remarks
     * For example, "2018-10-04T04:00:00-07:00" or "2019-02-05T12:00:00Z".
     */
    updatedAt?: string;
}
