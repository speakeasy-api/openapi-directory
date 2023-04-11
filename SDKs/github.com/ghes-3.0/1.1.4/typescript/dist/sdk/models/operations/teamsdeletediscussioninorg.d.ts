import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsDeleteDiscussionInOrgRequest extends SpeakeasyBase {
    discussionNumber: number;
    org: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsDeleteDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
