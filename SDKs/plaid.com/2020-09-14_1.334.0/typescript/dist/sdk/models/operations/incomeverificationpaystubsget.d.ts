import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IncomeVerificationPaystubsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    incomeVerificationPaystubsGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
