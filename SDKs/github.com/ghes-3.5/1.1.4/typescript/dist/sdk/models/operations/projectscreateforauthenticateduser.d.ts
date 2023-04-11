import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsCreateForAuthenticatedUserRequestBody extends SpeakeasyBase {
    /**
     * Body of the project
     */
    body?: string;
    /**
     * Name of the project
     */
    name: string;
}
export declare class ProjectsCreateForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    project?: shared.Project;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
