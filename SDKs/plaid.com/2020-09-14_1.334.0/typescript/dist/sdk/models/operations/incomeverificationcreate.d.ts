import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IncomeVerificationCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    incomeVerificationCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
