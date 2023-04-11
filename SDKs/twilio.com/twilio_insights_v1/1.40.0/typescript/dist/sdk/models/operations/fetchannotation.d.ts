import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAnnotationServerList: readonly ["https://insights.twilio.com"];
export declare class FetchAnnotationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAnnotationRequest extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Call.
     */
    callSid: string;
}
export declare class FetchAnnotationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    insightsV1CallAnnotation?: shared.InsightsV1CallAnnotation;
}
