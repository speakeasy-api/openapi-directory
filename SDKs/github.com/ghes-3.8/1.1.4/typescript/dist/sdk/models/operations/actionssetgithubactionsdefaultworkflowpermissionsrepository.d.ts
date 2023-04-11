import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryRequest extends SpeakeasyBase {
    actionsSetDefaultWorkflowPermissions: shared.ActionsSetDefaultWorkflowPermissions;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
