import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateMessageFeedbackServerList: readonly ["https://api.twilio.com"];
export declare class CreateMessageFeedbackSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateMessageFeedbackCreateMessageFeedbackRequest extends SpeakeasyBase {
    outcome?: shared.MessageFeedbackEnumOutcomeEnum;
}
export declare class CreateMessageFeedbackRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource.
     */
    accountSid: string;
    /**
     * The SID of the Message resource for which the feedback was provided.
     */
    messageSid: string;
    requestBody?: CreateMessageFeedbackCreateMessageFeedbackRequest;
}
export declare class CreateMessageFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountMessageMessageFeedback?: shared.ApiV2010AccountMessageMessageFeedback;
}
