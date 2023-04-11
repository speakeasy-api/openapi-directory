import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Output only. User's role within a Chat space, which determines their permitted actions in the space.
 */
export declare enum MembershipRoleEnum {
    MembershipRoleUnspecified = "MEMBERSHIP_ROLE_UNSPECIFIED",
    RoleMember = "ROLE_MEMBER",
    RoleManager = "ROLE_MANAGER"
}
/**
 * Output only. State of the membership.
 */
export declare enum MembershipStateEnum {
    MembershipStateUnspecified = "MEMBERSHIP_STATE_UNSPECIFIED",
    Joined = "JOINED",
    Invited = "INVITED",
    NotAMember = "NOT_A_MEMBER"
}
/**
 * Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.
 */
export declare class Membership extends SpeakeasyBase {
    /**
     * Output only. The creation time of the membership, such as when a member joined or was invited to join a space.
     */
    createTime?: string;
    /**
     * A user in Google Chat.
     */
    member?: User;
    /**
     * Resource name of the membership, assigned by the server. Format: spaces/{space}/members/{member}
     */
    name?: string;
    /**
     * Output only. User's role within a Chat space, which determines their permitted actions in the space.
     */
    role?: MembershipRoleEnum;
    /**
     * Output only. State of the membership.
     */
    state?: MembershipStateEnum;
}
