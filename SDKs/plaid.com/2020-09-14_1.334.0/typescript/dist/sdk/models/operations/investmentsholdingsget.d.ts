import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class InvestmentsHoldingsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    investmentsHoldingsGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
