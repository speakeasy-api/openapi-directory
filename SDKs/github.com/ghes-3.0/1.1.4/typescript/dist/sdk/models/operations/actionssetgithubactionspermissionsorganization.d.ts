import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsSetGithubActionsPermissionsOrganizationRequestBody extends SpeakeasyBase {
    /**
     * The permissions policy that controls the actions that are allowed to run. Can be one of: `all`, `local_only`, or `selected`.
     */
    allowedActions?: shared.AllowedActionsEnum;
    /**
     * The policy that controls the repositories in the organization that are allowed to run GitHub Actions. Can be one of: `all`, `none`, or `selected`.
     */
    enabledRepositories: shared.EnabledRepositoriesEnum;
}
export declare class ActionsSetGithubActionsPermissionsOrganizationRequest extends SpeakeasyBase {
    requestBody: ActionsSetGithubActionsPermissionsOrganizationRequestBody;
    org: string;
}
export declare class ActionsSetGithubActionsPermissionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
