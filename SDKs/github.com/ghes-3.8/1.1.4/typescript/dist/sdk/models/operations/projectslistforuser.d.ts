import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Indicates the state of the projects to return.
 */
export declare enum ProjectsListForUserStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class ProjectsListForUserRequest extends SpeakeasyBase {
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * Indicates the state of the projects to return.
     */
    state?: ProjectsListForUserStateEnum;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class ProjectsListForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    projects?: shared.Project[];
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
