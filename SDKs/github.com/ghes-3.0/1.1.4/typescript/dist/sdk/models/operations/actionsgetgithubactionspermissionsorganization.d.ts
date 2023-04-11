import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetGithubActionsPermissionsOrganizationRequest extends SpeakeasyBase {
    org: string;
}
export declare class ActionsGetGithubActionsPermissionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsOrganizationPermissions?: shared.ActionsOrganizationPermissions;
}
