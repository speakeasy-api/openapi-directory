import { SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
export declare class MemberLeftEventLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class MemberLeftEventLinks extends SpeakeasyBase {
    self?: MemberLeftEventLinksSelf;
}
/**
 * Member Left
 */
export declare class MemberLeftEvent extends SpeakeasyBase {
    links?: MemberLeftEventLinks;
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
     * The event type (`member:left`)
     */
    type?: string;
}
