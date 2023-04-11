import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsSetGithubActionsPermissionsRepositoryRequestBody extends SpeakeasyBase {
    /**
     * The permissions policy that controls the actions that are allowed to run. Can be one of: `all`, `local_only`, or `selected`.
     */
    allowedActions?: shared.AllowedActionsEnum;
    /**
     * Whether GitHub Actions is enabled on the repository.
     */
    enabled: boolean;
}
export declare class ActionsSetGithubActionsPermissionsRepositoryRequest extends SpeakeasyBase {
    requestBody: ActionsSetGithubActionsPermissionsRepositoryRequestBody;
    owner: string;
    repo: string;
}
export declare class ActionsSetGithubActionsPermissionsRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
