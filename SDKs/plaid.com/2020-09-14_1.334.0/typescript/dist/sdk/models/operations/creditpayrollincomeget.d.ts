import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreditPayrollIncomeGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    creditPayrollIncomeGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
