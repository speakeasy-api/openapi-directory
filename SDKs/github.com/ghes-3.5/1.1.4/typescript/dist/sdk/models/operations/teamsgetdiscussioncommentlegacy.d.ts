import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsGetDiscussionCommentLegacyRequest extends SpeakeasyBase {
    /**
     * The number that identifies the comment.
     */
    commentNumber: number;
    /**
     * The number that identifies the discussion.
     */
    discussionNumber: number;
    /**
     * The unique identifier of the team.
     */
    teamId: number;
}
export declare class TeamsGetDiscussionCommentLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussionComment?: shared.TeamDiscussionComment;
}
