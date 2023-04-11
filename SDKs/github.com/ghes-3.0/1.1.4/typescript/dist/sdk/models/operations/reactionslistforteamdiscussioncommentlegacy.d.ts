import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Returns a single [reaction type](https://docs.github.com/enterprise-server@3.0/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
 */
export declare enum ReactionsListForTeamDiscussionCommentLegacyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForTeamDiscussionCommentLegacyRequest extends SpeakeasyBase {
    commentNumber: number;
    /**
     * Returns a single [reaction type](https://docs.github.com/enterprise-server@3.0/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
     */
    content?: ReactionsListForTeamDiscussionCommentLegacyContentEnum;
    discussionNumber: number;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    teamId: number;
}
export declare class ReactionsListForTeamDiscussionCommentLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    reactions?: shared.Reaction[];
}
