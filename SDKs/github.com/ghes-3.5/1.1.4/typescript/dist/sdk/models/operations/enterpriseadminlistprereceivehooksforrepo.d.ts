import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnterpriseAdminListPreReceiveHooksForRepoSortEnum {
    Created = "created",
    Updated = "updated",
    Name = "name"
}
export declare class EnterpriseAdminListPreReceiveHooksForRepoRequest extends SpeakeasyBase {
    /**
     * The direction to sort the results by.
     */
    direction?: shared.DirectionEnum;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    sort?: EnterpriseAdminListPreReceiveHooksForRepoSortEnum;
}
export declare class EnterpriseAdminListPreReceiveHooksForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    repositoryPreReceiveHooks?: shared.RepositoryPreReceiveHook[];
}
