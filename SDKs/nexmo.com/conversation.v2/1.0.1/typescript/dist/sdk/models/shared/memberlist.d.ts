import { SpeakeasyBase } from "../../../internal/utils";
export declare class MemberListLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class MemberListLinks extends SpeakeasyBase {
    self?: MemberListLinksSelf;
}
/**
 * The state that the member is in for this conversation
 */
export declare enum MemberListStateEnum {
    Invited = "INVITED",
    Joined = "JOINED"
}
export declare class MemberList extends SpeakeasyBase {
    links?: MemberListLinks;
    /**
     * The display name of the User
     */
    displayName?: string;
    /**
     * Member ID
     */
    id?: string;
    /**
     * The name of the User
     */
    name?: string;
    /**
     * The state that the member is in for this conversation
     */
    state?: MemberListStateEnum;
    /**
     * The ID of the User
     */
    userId?: string;
}
