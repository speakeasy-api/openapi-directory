import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesUpdateRequestBodyLabels2 extends SpeakeasyBase {
    color?: string;
    description?: string;
    id?: number;
    name?: string;
}
/**
 * State of the issue. Either `open` or `closed`.
 */
export declare enum IssuesUpdateRequestBodyStateEnum {
    Open = "open",
    Closed = "closed"
}
/**
 * The reason for the current state
 */
export declare enum IssuesUpdateRequestBodyStateReasonEnum {
    Completed = "completed",
    NotPlanned = "not_planned",
    Reopened = "reopened"
}
export declare class IssuesUpdateRequestBody extends SpeakeasyBase {
    /**
     * Login for the user that this issue should be assigned to. **This field is deprecated.**
     */
    assignee?: string;
    /**
     * Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (`[]`) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
     */
    assignees?: string[];
    /**
     * The contents of the issue.
     */
    body?: string;
    /**
     * Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (`[]`) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._
     */
    labels?: any[];
    milestone?: any;
    /**
     * State of the issue. Either `open` or `closed`.
     */
    state?: IssuesUpdateRequestBodyStateEnum;
    /**
     * The reason for the current state
     */
    stateReason?: IssuesUpdateRequestBodyStateReasonEnum;
    /**
     * The title of the issue.
     */
    title?: any;
}
export declare class IssuesUpdateRequest extends SpeakeasyBase {
    requestBody?: IssuesUpdateRequestBody;
    /**
     * The number that identifies the issue.
     */
    issueNumber: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Service unavailable
 */
export declare class IssuesUpdate503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class IssuesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Moved permanently
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    issue?: shared.Issue;
    /**
     * Service unavailable
     */
    issuesUpdate503ApplicationJSONObject?: IssuesUpdate503ApplicationJSON;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
