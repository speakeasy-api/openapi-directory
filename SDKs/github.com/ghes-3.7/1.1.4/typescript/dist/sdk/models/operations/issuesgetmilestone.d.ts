import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesGetMilestoneRequest extends SpeakeasyBase {
    /**
     * The number that identifies the milestone.
     */
    milestoneNumber: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class IssuesGetMilestoneResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    milestone?: shared.Milestone;
}
