import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateUserDefinedMessageServerList: readonly ["https://api.twilio.com"];
export declare class CreateUserDefinedMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateUserDefinedMessageCreateUserDefinedMessageRequest extends SpeakeasyBase {
    /**
     * The User Defined Message in the form of URL-encoded JSON string.
     */
    content: string;
    /**
     * A unique string value to identify API call. This should be a unique string value per API call and can be a randomly generated.
     */
    idempotencyKey?: string;
}
export declare class CreateUserDefinedMessageRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created User Defined Message.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined Message is associated with.
     */
    callSid: string;
    requestBody?: CreateUserDefinedMessageCreateUserDefinedMessageRequest;
}
export declare class CreateUserDefinedMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountCallUserDefinedMessage?: shared.ApiV2010AccountCallUserDefinedMessage;
}
