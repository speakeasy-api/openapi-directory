import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { ReactionRollup } from "./reactionrollup";
/**
 * A reply to a discussion within a team.
 */
export declare class TeamDiscussionComment extends SpeakeasyBase {
    /**
     * A GitHub user.
     */
    author: NullableSimpleUser;
    /**
     * The main text of the comment.
     */
    body: string;
    bodyHtml: string;
    /**
     * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
     */
    bodyVersion: string;
    createdAt: Date;
    discussionUrl: string;
    htmlUrl: string;
    lastEditedAt: Date;
    nodeId: string;
    /**
     * The unique sequence number of a team discussion comment.
     */
    number: number;
    reactions?: ReactionRollup;
    updatedAt: Date;
    url: string;
}
