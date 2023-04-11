import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCallServerList: readonly ["https://insights.twilio.com"];
export declare class FetchCallSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCallRequest extends SpeakeasyBase {
    sid: string;
}
export declare class FetchCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    insightsV1Call?: shared.InsightsV1Call;
}
