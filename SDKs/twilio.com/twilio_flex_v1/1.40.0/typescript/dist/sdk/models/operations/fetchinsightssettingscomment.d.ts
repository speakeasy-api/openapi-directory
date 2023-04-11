import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchInsightsSettingsCommentServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchInsightsSettingsCommentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchInsightsSettingsCommentRequest extends SpeakeasyBase {
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class FetchInsightsSettingsCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1InsightsSettingsComment?: shared.FlexV1InsightsSettingsComment;
}
