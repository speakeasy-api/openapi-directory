import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Returns a single [reaction type](https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion.
 */
export declare enum ReactionsListForTeamDiscussionInOrgContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForTeamDiscussionInOrgRequest extends SpeakeasyBase {
    /**
     * Returns a single [reaction type](https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion.
     */
    content?: ReactionsListForTeamDiscussionInOrgContentEnum;
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
export declare class ReactionsListForTeamDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    reactions?: shared.Reaction[];
}
