import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseRequest extends SpeakeasyBase {
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
}
export declare class ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success response
     */
    actionsGetDefaultWorkflowPermissions?: shared.ActionsGetDefaultWorkflowPermissions;
}
