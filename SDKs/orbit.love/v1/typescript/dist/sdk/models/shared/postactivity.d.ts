import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostActivityActivityTypeEnum {
    Content = "content"
}
export declare class PostActivity extends SpeakeasyBase {
    activityType: PostActivityActivityTypeEnum;
    /**
     * The date and time at which the content was published; defaults to now
     */
    occurredAt?: string;
    /**
     * The url representing the post
     */
    url: string;
}
