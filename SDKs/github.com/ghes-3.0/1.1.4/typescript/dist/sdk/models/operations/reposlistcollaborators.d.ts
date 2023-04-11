import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter collaborators returned by their affiliation. Can be one of:
 *
 * @remarks
 * \* `outside`: All outside collaborators of an organization-owned repository.
 * \* `direct`: All collaborators with permissions to an organization-owned repository, regardless of organization membership status.
 * \* `all`: All collaborators the authenticated user can see.
 */
export declare enum ReposListCollaboratorsAffiliationEnum {
    Outside = "outside",
    Direct = "direct",
    All = "all"
}
export declare class ReposListCollaboratorsRequest extends SpeakeasyBase {
    /**
     * Filter collaborators returned by their affiliation. Can be one of:
     *
     * @remarks
     * \* `outside`: All outside collaborators of an organization-owned repository.
     * \* `direct`: All collaborators with permissions to an organization-owned repository, regardless of organization membership status.
     * \* `all`: All collaborators the authenticated user can see.
     */
    affiliation?: ReposListCollaboratorsAffiliationEnum;
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
}
export declare class ReposListCollaboratorsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    collaborators?: shared.Collaborator[];
}
