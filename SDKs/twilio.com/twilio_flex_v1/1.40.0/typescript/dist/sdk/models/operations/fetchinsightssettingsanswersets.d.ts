import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchInsightsSettingsAnswersetsServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchInsightsSettingsAnswersetsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchInsightsSettingsAnswersetsRequest extends SpeakeasyBase {
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class FetchInsightsSettingsAnswersetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1InsightsSettingsAnswersets?: shared.FlexV1InsightsSettingsAnswersets;
}
