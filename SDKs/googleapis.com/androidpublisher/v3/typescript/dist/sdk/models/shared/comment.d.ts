import { SpeakeasyBase } from "../../../internal/utils";
import { DeveloperComment } from "./developercomment";
import { UserComment } from "./usercomment";
/**
 * An entry of conversation between user and developer.
 */
export declare class Comment extends SpeakeasyBase {
    /**
     * Developer entry from conversation between user and developer.
     */
    developerComment?: DeveloperComment;
    /**
     * User entry from conversation between user and developer.
     */
    userComment?: UserComment;
}
