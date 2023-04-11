import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class InvestmentsTransactionsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    investmentsTransactionsGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
