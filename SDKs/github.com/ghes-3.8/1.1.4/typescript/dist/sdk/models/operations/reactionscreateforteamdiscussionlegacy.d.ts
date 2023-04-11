import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The [reaction type](https://docs.github.com/enterprise-server@3.8/rest/reference/reactions#reaction-types) to add to the team discussion.
 */
export declare enum ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForTeamDiscussionLegacyRequestBody extends SpeakeasyBase {
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@3.8/rest/reference/reactions#reaction-types) to add to the team discussion.
     */
    content: ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum;
}
export declare class ReactionsCreateForTeamDiscussionLegacyRequest extends SpeakeasyBase {
    requestBody: ReactionsCreateForTeamDiscussionLegacyRequestBody;
    /**
     * The number that identifies the discussion.
     */
    discussionNumber: number;
    /**
     * The unique identifier of the team.
     */
    teamId: number;
}
export declare class ReactionsCreateForTeamDiscussionLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    reaction?: shared.Reaction;
}
