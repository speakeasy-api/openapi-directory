import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateCallFeedbackServerList: readonly ["https://api.twilio.com"];
export declare class UpdateCallFeedbackSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateCallFeedbackUpdateCallFeedbackRequest extends SpeakeasyBase {
    /**
     * One or more issues experienced during the call. The issues can be: `imperfect-audio`, `dropped-call`, `incorrect-caller-id`, `post-dial-delay`, `digits-not-captured`, `audio-latency`, `unsolicited-call`, or `one-way-audio`.
     */
    issue?: shared.CallFeedbackEnumIssuesEnum[];
    /**
     * The call quality expressed as an integer from `1` to `5` where `1` represents very poor call quality and `5` represents a perfect call.
     */
    qualityScore?: number;
}
export declare class UpdateCallFeedbackRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * The call sid that uniquely identifies the call
     */
    callSid: string;
    requestBody?: UpdateCallFeedbackUpdateCallFeedbackRequest;
}
export declare class UpdateCallFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountCallCallFeedback?: shared.ApiV2010AccountCallCallFeedback;
}
