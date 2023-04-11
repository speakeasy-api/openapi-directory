import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposAddCollaboratorRequestBody extends SpeakeasyBase {
    /**
     * The permission to grant the collaborator. **Only valid on organization-owned repositories.**
     */
    permission?: string;
}
export declare class ReposAddCollaboratorRequest extends SpeakeasyBase {
    requestBody?: ReposAddCollaboratorRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class ReposAddCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response when a new invitation is created
     */
    repositoryInvitation?: shared.RepositoryInvitation;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
