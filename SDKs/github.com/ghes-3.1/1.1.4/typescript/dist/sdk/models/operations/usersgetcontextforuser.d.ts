import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Identifies which additional information you'd like to receive about the person's hovercard. Can be `organization`, `repository`, `issue`, `pull_request`. **Required** when using `subject_id`.
 */
export declare enum UsersGetContextForUserSubjectTypeEnum {
    Organization = "organization",
    Repository = "repository",
    Issue = "issue",
    PullRequest = "pull_request"
}
export declare class UsersGetContextForUserRequest extends SpeakeasyBase {
    /**
     * Uses the ID for the `subject_type` you specified. **Required** when using `subject_type`.
     */
    subjectId?: string;
    /**
     * Identifies which additional information you'd like to receive about the person's hovercard. Can be `organization`, `repository`, `issue`, `pull_request`. **Required** when using `subject_id`.
     */
    subjectType?: UsersGetContextForUserSubjectTypeEnum;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class UsersGetContextForUserResponse extends SpeakeasyBase {
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
    hovercard?: shared.Hovercard;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
