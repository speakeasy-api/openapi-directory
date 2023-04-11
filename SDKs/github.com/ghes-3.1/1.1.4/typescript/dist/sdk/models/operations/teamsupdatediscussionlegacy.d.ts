import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsUpdateDiscussionLegacyRequestBody extends SpeakeasyBase {
    /**
     * The discussion post's body text.
     */
    body?: string;
    /**
     * The discussion post's title.
     */
    title?: string;
}
export declare class TeamsUpdateDiscussionLegacyRequest extends SpeakeasyBase {
    requestBody?: TeamsUpdateDiscussionLegacyRequestBody;
    /**
     * The number that identifies the discussion.
     */
    discussionNumber: number;
    /**
     * The unique identifier of the team.
     */
    teamId: number;
}
export declare class TeamsUpdateDiscussionLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussion?: shared.TeamDiscussion;
}
