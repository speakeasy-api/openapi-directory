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
 * The open or closed state of the issue.
 */
export declare enum IssuesUpdateRequestBodyStateEnum {
    Open = "open",
    Closed = "closed"
}
/**
 * The reason for the state change. Ignored unless `state` is changed.
 */
export declare enum IssuesUpdateRequestBodyStateReasonEnum {
    Completed = "completed",
    NotPlanned = "not_planned",
    Reopened = "reopened"
}
export declare class IssuesUpdateRequestBody extends SpeakeasyBase {
    /**
     * Username to assign to this issue. **This field is deprecated.**
     */
    assignee?: string;
    /**
     * Usernames to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this issue. Send an empty array (`[]`) to clear all assignees from the issue. Only users with push access can set assignees for new issues. Without push access to the repository, assignee changes are silently dropped.
     */
    assignees?: string[];
    /**
     * The contents of the issue.
     */
    body?: string;
    /**
     * Labels to associate with this issue. Pass one or more labels to _replace_ the set of labels on this issue. Send an empty array (`[]`) to clear all labels from the issue. Only users with push access can set labels for issues. Without push access to the repository, label changes are silently dropped.
     */
    labels?: any[];
    milestone?: any;
    /**
     * The open or closed state of the issue.
     */
    state?: IssuesUpdateRequestBodyStateEnum;
    /**
     * The reason for the state change. Ignored unless `state` is changed.
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
