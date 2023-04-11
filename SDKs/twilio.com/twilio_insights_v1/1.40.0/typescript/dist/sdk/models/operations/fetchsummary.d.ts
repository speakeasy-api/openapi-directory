import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSummaryServerList: readonly ["https://insights.twilio.com"];
export declare class FetchSummarySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSummaryRequest extends SpeakeasyBase {
    callSid: string;
    processingState?: shared.SummaryEnumProcessingStateEnum;
}
export declare class FetchSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    insightsV1CallSummary?: shared.InsightsV1CallSummary;
}
