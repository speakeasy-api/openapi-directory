import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BillingGetGithubAdvancedSecurityBillingGheRequest extends SpeakeasyBase {
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
export declare class BillingGetGithubAdvancedSecurityBillingGheResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    advancedSecurityActiveCommitters?: shared.AdvancedSecurityActiveCommitters;
    /**
     * Response if GitHub Advanced Security is not enabled for this repository
     */
    basicError?: shared.BasicError;
}
