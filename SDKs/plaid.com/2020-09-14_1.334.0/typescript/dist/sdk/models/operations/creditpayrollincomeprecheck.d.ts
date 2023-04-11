import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreditPayrollIncomePrecheckResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    creditPayrollIncomePrecheckResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
