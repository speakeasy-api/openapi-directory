import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForTeamDiscussionCommentLegacyPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare class ReactionsListForTeamDiscussionCommentLegacyQueryParams extends SpeakeasyBase {
    content?: shared.CommentNumberEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForTeamDiscussionCommentLegacyRequest extends SpeakeasyBase {
    pathParams: ReactionsListForTeamDiscussionCommentLegacyPathParams;
    queryParams: ReactionsListForTeamDiscussionCommentLegacyQueryParams;
}
export declare class ReactionsListForTeamDiscussionCommentLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    reactions?: shared.Reaction[];
}
