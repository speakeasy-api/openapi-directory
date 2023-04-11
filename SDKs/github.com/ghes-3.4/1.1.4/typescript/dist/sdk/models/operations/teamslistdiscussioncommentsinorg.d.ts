import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsListDiscussionCommentsInOrgRequest extends SpeakeasyBase {
    /**
     * The direction to sort the results by.
     */
    direction?: shared.DirectionEnum;
    /**
     * The number that identifies the discussion.
     */
    discussionNumber: number;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The slug of the team name.
     */
    teamSlug: string;
}
export declare class TeamsListDiscussionCommentsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussionComments?: shared.TeamDiscussionComment[];
}
