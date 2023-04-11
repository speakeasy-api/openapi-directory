import { SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
export declare class MemberInvitedEventLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class MemberInvitedEventLinks extends SpeakeasyBase {
    self?: MemberInvitedEventLinksSelf;
}
/**
 * Member Invited
 */
export declare class MemberInvitedEvent extends SpeakeasyBase {
    links?: MemberInvitedEventLinks;
    body?: Member;
    /**
     * The member ID of the sender
     */
    from?: string;
    /**
     * The ID of the event
     */
    id?: number;
    /**
     * The time that the event happened
     */
    timestamp?: string;
    /**
     * The event type (`member:invited`)
     */
    type?: string;
}
