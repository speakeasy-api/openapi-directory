import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityListReposStarredByAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The direction to sort the results by.
     */
    direction?: shared.DirectionEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.
     */
    sort?: shared.SortEnum;
}
export declare class ActivityListReposStarredByAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    repositories?: shared.Repository[];
    /**
     * Response
     */
    starredRepositories?: shared.StarredRepository[];
}
