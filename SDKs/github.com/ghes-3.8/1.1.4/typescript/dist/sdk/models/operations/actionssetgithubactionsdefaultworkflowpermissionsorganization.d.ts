import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationRequest extends SpeakeasyBase {
    actionsSetDefaultWorkflowPermissions?: shared.ActionsSetDefaultWorkflowPermissions;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
