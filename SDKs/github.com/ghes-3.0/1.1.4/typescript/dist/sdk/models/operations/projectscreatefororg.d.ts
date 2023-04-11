import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsCreateForOrgRequestBody extends SpeakeasyBase {
    /**
     * The description of the project.
     */
    body?: string;
    /**
     * The name of the project.
     */
    name: string;
}
export declare class ProjectsCreateForOrgRequest extends SpeakeasyBase {
    requestBody: ProjectsCreateForOrgRequestBody;
    org: string;
}
export declare class ProjectsCreateForOrgResponse extends SpeakeasyBase {
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
     * Validation failed
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
