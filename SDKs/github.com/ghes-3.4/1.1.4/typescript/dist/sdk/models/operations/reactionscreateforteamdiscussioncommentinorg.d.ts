import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The [reaction type](https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#reaction-types) to add to the team discussion comment.
 */
export declare enum ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForTeamDiscussionCommentInOrgRequestBody extends SpeakeasyBase {
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@3.4/rest/reference/reactions#reaction-types) to add to the team discussion comment.
     */
    content: ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum;
}
export declare class ReactionsCreateForTeamDiscussionCommentInOrgRequest extends SpeakeasyBase {
    requestBody: ReactionsCreateForTeamDiscussionCommentInOrgRequestBody;
    /**
     * The number that identifies the comment.
     */
    commentNumber: number;
    /**
     * The number that identifies the discussion.
     */
    discussionNumber: number;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    teamSlug: string;
}
export declare class ReactionsCreateForTeamDiscussionCommentInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response when the reaction type has already been added to this team discussion comment
     */
    reaction?: shared.Reaction;
}
