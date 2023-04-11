import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The state of the milestone. Either `open` or `closed`.
 */
export declare enum IssuesCreateMilestoneRequestBodyStateEnum {
    Open = "open",
    Closed = "closed"
}
export declare class IssuesCreateMilestoneRequestBody extends SpeakeasyBase {
    /**
     * A description of the milestone.
     */
    description?: string;
    /**
     * The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    dueOn?: Date;
    /**
     * The state of the milestone. Either `open` or `closed`.
     */
    state?: IssuesCreateMilestoneRequestBodyStateEnum;
    /**
     * The title of the milestone.
     */
    title: string;
}
export declare class IssuesCreateMilestoneRequest extends SpeakeasyBase {
    requestBody: IssuesCreateMilestoneRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class IssuesCreateMilestoneResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
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
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
