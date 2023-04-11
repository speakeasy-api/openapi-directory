import { SpeakeasyBase } from "../../../internal/utils";
import { MemberSnippet } from "./membersnippet";
/**
 * A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits.
 */
export declare class Member extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#member".
     */
    kind?: string;
    snippet?: MemberSnippet;
}
