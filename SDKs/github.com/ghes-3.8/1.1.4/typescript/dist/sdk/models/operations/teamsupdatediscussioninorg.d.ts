import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsUpdateDiscussionInOrgRequestBody extends SpeakeasyBase {
    /**
     * The discussion post's body text.
     */
    body?: string;
    /**
     * The discussion post's title.
     */
    title?: string;
}
export declare class TeamsUpdateDiscussionInOrgRequest extends SpeakeasyBase {
    requestBody?: TeamsUpdateDiscussionInOrgRequestBody;
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
export declare class TeamsUpdateDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussion?: shared.TeamDiscussion;
}
