import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsListDiscussionCommentsLegacyRequest extends SpeakeasyBase {
    /**
     * One of `asc` (ascending) or `desc` (descending).
     */
    direction?: shared.DirectionEnum;
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
export declare class TeamsListDiscussionCommentsLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussionComments?: shared.TeamDiscussionComment[];
}
