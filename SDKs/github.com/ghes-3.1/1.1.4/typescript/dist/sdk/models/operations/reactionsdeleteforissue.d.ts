import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReactionsDeleteForIssueRequest extends SpeakeasyBase {
    /**
     * The number that identifies the issue.
     */
    issueNumber: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The unique identifier of the reaction.
     */
    reactionId: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReactionsDeleteForIssueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
