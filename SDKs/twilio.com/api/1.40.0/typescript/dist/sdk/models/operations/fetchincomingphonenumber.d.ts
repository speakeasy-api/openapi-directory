import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchIncomingPhoneNumberServerList: readonly ["https://api.twilio.com"];
export declare class FetchIncomingPhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchIncomingPhoneNumberRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the IncomingPhoneNumber resource to fetch.
     */
    sid: string;
}
export declare class FetchIncomingPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountIncomingPhoneNumber?: shared.ApiV2010AccountIncomingPhoneNumber;
}
