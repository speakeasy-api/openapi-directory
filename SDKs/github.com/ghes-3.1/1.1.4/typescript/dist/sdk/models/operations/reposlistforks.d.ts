import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListForksPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListForksQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    sort?: shared.RepoEnum1;
}
export declare class ReposListForksRequest extends SpeakeasyBase {
    pathParams: ReposListForksPathParams;
    queryParams: ReposListForksQueryParams;
}
export declare class ReposListForksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    minimalRepositories?: shared.MinimalRepository[];
    scimError?: shared.ScimError;
}
