import { SpeakeasyBase } from "../../../internal/utils";
import { Identity } from "./identity";
import { Member } from "./member";
export declare class MemberAndIdentity extends SpeakeasyBase {
    /**
     * Represents an email address, a profile on networks like github and twitter, or a record in another system.
     */
    identity?: Identity;
    member?: Member;
}
