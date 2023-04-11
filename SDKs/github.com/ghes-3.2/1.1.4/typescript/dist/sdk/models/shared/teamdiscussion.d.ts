import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { ReactionRollup } from "./reactionrollup";
/**
 * A team discussion is a persistent record of a free-form conversation within a team.
 */
export declare class TeamDiscussion extends SpeakeasyBase {
    /**
     * Simple User
     */
    author: NullableSimpleUser;
    /**
     * The main text of the discussion.
     */
    body: string;
    bodyHtml: string;
    /**
     * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
     */
    bodyVersion: string;
    commentsCount: number;
    commentsUrl: string;
    createdAt: Date;
    htmlUrl: string;
    lastEditedAt: Date;
    nodeId: string;
    /**
     * The unique sequence number of a team discussion.
     */
    number: number;
    /**
     * Whether or not this discussion should be pinned for easy retrieval.
     */
    pinned: boolean;
    /**
     * Whether or not this discussion should be restricted to team members and organization administrators.
     */
    private: boolean;
    reactions?: ReactionRollup;
    teamUrl: string;
    /**
     * The title of the discussion.
     */
    title: string;
    updatedAt: Date;
    url: string;
}
