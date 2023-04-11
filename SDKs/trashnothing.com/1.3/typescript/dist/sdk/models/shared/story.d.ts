import { SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
import { User } from "./user";
/**
 * A user story
 */
export declare class Story extends SpeakeasyBase {
    content?: string;
    /**
     * The UTC date and time when the post was published.
     */
    date?: Date;
    /**
     * The number of people who have liked this story.
     */
    likeCount?: number;
    /**
     * Details about the photos associated with this story (may be null if there are no photos).
     */
    photos?: Photo[];
    /**
     * A URL that can be used to share the story (may be null if the story is not public).
     */
    shareUrl?: string;
    storyId?: string;
    title?: string;
    user?: User;
    /**
     * Whether or not the current user has liked this story or not.
     */
    userLiked?: boolean;
}
