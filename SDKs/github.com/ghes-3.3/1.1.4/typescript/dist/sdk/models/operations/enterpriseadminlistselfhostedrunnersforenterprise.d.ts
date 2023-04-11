import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest extends SpeakeasyBase {
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
export declare class EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSON extends SpeakeasyBase {
    runners?: shared.Runner[];
    totalCount?: number;
}
export declare class EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject?: EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSON;
}
