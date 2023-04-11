import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest extends SpeakeasyBase {
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
}
/**
 * Response
 */
export declare class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSON extends SpeakeasyBase {
    organizations: shared.OrganizationSimple[];
    totalCount: number;
}
export declare class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSONObject?: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSON;
}
