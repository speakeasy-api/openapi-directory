import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The state of the milestone. Either `open` or `closed`.
 */
export declare enum IssuesUpdateMilestoneRequestBodyStateEnum {
    Open = "open",
    Closed = "closed"
}
export declare class IssuesUpdateMilestoneRequestBody extends SpeakeasyBase {
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
    state?: IssuesUpdateMilestoneRequestBodyStateEnum;
    /**
     * The title of the milestone.
     */
    title?: string;
}
export declare class IssuesUpdateMilestoneRequest extends SpeakeasyBase {
    requestBody?: IssuesUpdateMilestoneRequestBody;
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
export declare class IssuesUpdateMilestoneResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    milestone?: shared.Milestone;
}
