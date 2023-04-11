import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateMessageServerList: readonly ["https://api.twilio.com"];
export declare class UpdateMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateMessageUpdateMessageRequest extends SpeakeasyBase {
    /**
     * The text of the message you want to send. Can be up to 1,600 characters long.
     */
    body?: string;
    status?: shared.MessageEnumUpdateStatusEnum;
}
export declare class UpdateMessageRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Message resources to update.
     */
    accountSid: string;
    requestBody?: UpdateMessageUpdateMessageRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Message resource to update.
     */
    sid: string;
}
export declare class UpdateMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountMessage?: shared.ApiV2010AccountMessage;
}
