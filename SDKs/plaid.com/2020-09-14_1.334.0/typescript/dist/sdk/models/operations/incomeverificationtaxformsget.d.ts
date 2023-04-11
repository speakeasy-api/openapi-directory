import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IncomeVerificationTaxformsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    incomeVerificationTaxformsGetResponse?: Record<string, any>;
    /**
     * Error response.
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
