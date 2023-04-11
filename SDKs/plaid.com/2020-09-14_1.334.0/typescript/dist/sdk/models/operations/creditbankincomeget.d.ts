import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreditBankIncomeGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    creditBankIncomeGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
