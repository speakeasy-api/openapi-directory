import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The [reaction type](https://docs.github.com/enterprise-server@3.7/rest/reference/reactions#reaction-types) to add to the team discussion.
 */
export declare enum ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForTeamDiscussionInOrgRequestBody extends SpeakeasyBase {
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@3.7/rest/reference/reactions#reaction-types) to add to the team discussion.
     */
    content: ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum;
}
export declare class ReactionsCreateForTeamDiscussionInOrgRequest extends SpeakeasyBase {
    requestBody: ReactionsCreateForTeamDiscussionInOrgRequestBody;
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
export declare class ReactionsCreateForTeamDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    reaction?: shared.Reaction;
}
