import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody extends SpeakeasyBase {
    /**
     * The permissions policy that controls the actions that are allowed to run.
     */
    allowedActions?: shared.AllowedActionsEnum;
    /**
     * The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions.
     */
    enabledOrganizations: shared.EnabledOrganizationsEnum;
}
export declare class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest extends SpeakeasyBase {
    requestBody: EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
}
export declare class EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
