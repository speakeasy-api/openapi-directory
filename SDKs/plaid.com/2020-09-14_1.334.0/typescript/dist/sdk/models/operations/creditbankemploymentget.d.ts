import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreditBankEmploymentGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    creditBankEmploymentGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
