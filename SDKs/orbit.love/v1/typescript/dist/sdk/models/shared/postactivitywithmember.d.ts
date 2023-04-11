import { SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
export declare enum PostActivityWithMemberActivityTypeEnum {
    Content = "content"
}
export declare class PostActivityWithMember extends SpeakeasyBase {
    activityType: PostActivityWithMemberActivityTypeEnum;
    member?: Member;
    /**
     * The date and time at which the content was published; defaults to now
     */
    occurredAt?: string;
    /**
     * The url representing the post
     */
    url: string;
}
