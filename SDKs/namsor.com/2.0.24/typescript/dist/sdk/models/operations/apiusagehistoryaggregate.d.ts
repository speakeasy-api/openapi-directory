import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApiUsageHistoryAggregateResponse extends SpeakeasyBase {
    /**
     * Print historical API usage.
     */
    apiUsageAggregatedOut?: shared.APIUsageAggregatedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
