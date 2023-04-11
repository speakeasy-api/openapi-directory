import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsSetGithubActionsPermissionsRepositoryRequestBody extends SpeakeasyBase {
    /**
     * The permissions policy that controls the actions that are allowed to run.
     */
    allowedActions?: shared.AllowedActionsEnum;
    /**
     * Whether GitHub Actions is enabled on the repository.
     */
    enabled: boolean;
}
export declare class ActionsSetGithubActionsPermissionsRepositoryRequest extends SpeakeasyBase {
    requestBody: ActionsSetGithubActionsPermissionsRepositoryRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ActionsSetGithubActionsPermissionsRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
