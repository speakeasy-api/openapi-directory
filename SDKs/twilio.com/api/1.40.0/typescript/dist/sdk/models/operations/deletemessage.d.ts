import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteMessageServerList: readonly ["https://api.twilio.com"];
export declare class DeleteMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteMessageRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Message resources to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Message resource to delete.
     */
    sid: string;
}
export declare class DeleteMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
