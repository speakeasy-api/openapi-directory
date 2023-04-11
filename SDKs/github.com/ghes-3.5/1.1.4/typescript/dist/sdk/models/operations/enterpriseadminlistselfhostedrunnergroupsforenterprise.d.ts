import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest extends SpeakeasyBase {
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
}
/**
 * Response
 */
export declare class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSON extends SpeakeasyBase {
    runnerGroups: shared.RunnerGroupsEnterprise[];
    totalCount: number;
}
export declare class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    enterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSONObject?: EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSON;
}
