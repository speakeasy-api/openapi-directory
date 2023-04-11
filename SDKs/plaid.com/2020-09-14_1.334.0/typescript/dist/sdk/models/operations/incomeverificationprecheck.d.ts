import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IncomeVerificationPrecheckResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    incomeVerificationPrecheckResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
