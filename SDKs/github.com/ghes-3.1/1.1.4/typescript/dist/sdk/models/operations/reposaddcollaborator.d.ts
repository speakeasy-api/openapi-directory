import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The permission to grant the collaborator. **Only valid on organization-owned repositories.**
 */
export declare enum ReposAddCollaboratorRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin",
    Maintain = "maintain",
    Triage = "triage"
}
export declare class ReposAddCollaboratorRequestBody extends SpeakeasyBase {
    /**
     * The permission to grant the collaborator. **Only valid on organization-owned repositories.**
     */
    permission?: ReposAddCollaboratorRequestBodyPermissionEnum;
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
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
