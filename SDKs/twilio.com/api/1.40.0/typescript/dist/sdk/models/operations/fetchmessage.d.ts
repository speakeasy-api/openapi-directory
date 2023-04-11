import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchMessageServerList: readonly ["https://api.twilio.com"];
export declare class FetchMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchMessageRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Message resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Message resource to fetch.
     */
    sid: string;
}
export declare class FetchMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountMessage?: shared.ApiV2010AccountMessage;
}
