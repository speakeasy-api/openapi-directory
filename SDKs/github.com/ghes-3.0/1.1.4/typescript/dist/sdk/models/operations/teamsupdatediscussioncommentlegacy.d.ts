import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsUpdateDiscussionCommentLegacyRequestBody extends SpeakeasyBase {
    /**
     * The discussion comment's body text.
     */
    body: string;
}
export declare class TeamsUpdateDiscussionCommentLegacyRequest extends SpeakeasyBase {
    requestBody: TeamsUpdateDiscussionCommentLegacyRequestBody;
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsUpdateDiscussionCommentLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussionComment?: shared.TeamDiscussionComment;
}
