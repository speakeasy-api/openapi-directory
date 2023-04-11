import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreditPayrollIncomeRefreshResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    creditPayrollIncomeRefreshResponse?: Record<string, any>;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
