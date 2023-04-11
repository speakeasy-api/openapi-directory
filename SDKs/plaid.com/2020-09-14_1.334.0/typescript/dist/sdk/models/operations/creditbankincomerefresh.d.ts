import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreditBankIncomeRefreshResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    creditBankIncomeRefreshResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
