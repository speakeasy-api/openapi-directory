import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The role of the user in the team.
 */
export declare enum TeamMembershipRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}
/**
 * The state of the user's membership in the team.
 */
export declare enum TeamMembershipStateEnum {
    Active = "active",
    Pending = "pending"
}
/**
 * Team Membership
 */
export declare class TeamMembership extends SpeakeasyBase {
    /**
     * The role of the user in the team.
     */
    role: TeamMembershipRoleEnum;
    /**
     * The state of the user's membership in the team.
     */
    state: TeamMembershipStateEnum;
    url: string;
}
