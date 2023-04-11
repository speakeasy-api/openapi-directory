import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsListDiscussionsInOrgRequest extends SpeakeasyBase {
    /**
     * One of `asc` (ascending) or `desc` (descending).
     */
    direction?: shared.DirectionEnum;
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * Pinned discussions only filter
     */
    pinned?: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsListDiscussionsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussions?: shared.TeamDiscussion[];
}
