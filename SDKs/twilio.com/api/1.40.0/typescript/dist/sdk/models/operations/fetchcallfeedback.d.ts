import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCallFeedbackServerList: readonly ["https://api.twilio.com"];
export declare class FetchCallFeedbackSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCallFeedbackRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * The call sid that uniquely identifies the call
     */
    callSid: string;
}
export declare class FetchCallFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountCallCallFeedback?: shared.ApiV2010AccountCallCallFeedback;
}
