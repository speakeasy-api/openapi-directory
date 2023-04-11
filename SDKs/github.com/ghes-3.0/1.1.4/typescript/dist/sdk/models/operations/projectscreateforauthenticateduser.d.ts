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
/**
 * Preview header missing
 */
export declare class ProjectsCreateForAuthenticatedUser415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
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
     * Preview header missing
     */
    projectsCreateForAuthenticatedUser415ApplicationJSONObject?: ProjectsCreateForAuthenticatedUser415ApplicationJSON;
    /**
     * Validation failed
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
