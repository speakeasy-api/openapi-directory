import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The [reaction type](https://docs.github.com/enterprise-server@3.0/rest/reference/reactions#reaction-types) to add to the team discussion comment.
 */
export declare enum ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForTeamDiscussionCommentLegacyRequestBody extends SpeakeasyBase {
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@3.0/rest/reference/reactions#reaction-types) to add to the team discussion comment.
     */
    content: ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum;
}
export declare class ReactionsCreateForTeamDiscussionCommentLegacyRequest extends SpeakeasyBase {
    requestBody: ReactionsCreateForTeamDiscussionCommentLegacyRequestBody;
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare class ReactionsCreateForTeamDiscussionCommentLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    reaction?: shared.Reaction;
}
