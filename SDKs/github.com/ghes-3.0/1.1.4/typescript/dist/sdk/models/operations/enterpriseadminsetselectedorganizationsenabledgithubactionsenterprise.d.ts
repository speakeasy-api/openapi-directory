import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody extends SpeakeasyBase {
    /**
     * List of organization IDs to enable for GitHub Actions.
     */
    selectedOrganizationIds: number[];
}
export declare class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest extends SpeakeasyBase {
    requestBody: EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
}
export declare class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
