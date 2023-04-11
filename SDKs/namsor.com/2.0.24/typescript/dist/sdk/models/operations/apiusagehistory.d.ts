import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApiUsageHistoryResponse extends SpeakeasyBase {
    /**
     * Print historical API usage (NB. new output format form v2.0.15)
     */
    apiUsageHistoryOut?: shared.APIUsageHistoryOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
