import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCreateDiscussionCommentInOrgRequestBody extends SpeakeasyBase {
    /**
     * The discussion comment's body text.
     */
    body: string;
}
export declare class TeamsCreateDiscussionCommentInOrgRequest extends SpeakeasyBase {
    requestBody: TeamsCreateDiscussionCommentInOrgRequestBody;
    discussionNumber: number;
    org: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsCreateDiscussionCommentInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussionComment?: shared.TeamDiscussionComment;
}
