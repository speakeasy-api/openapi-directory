import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetGithubActionsPermissionsRepositoryRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsGetGithubActionsPermissionsRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsRepositoryPermissions?: shared.ActionsRepositoryPermissions;
}
