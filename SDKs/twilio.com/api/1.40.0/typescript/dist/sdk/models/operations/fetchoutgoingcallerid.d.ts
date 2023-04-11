import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchOutgoingCallerIdServerList: readonly ["https://api.twilio.com"];
export declare class FetchOutgoingCallerIdSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchOutgoingCallerIdRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the OutgoingCallerId resource to fetch.
     */
    sid: string;
}
export declare class FetchOutgoingCallerIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountOutgoingCallerId?: shared.ApiV2010AccountOutgoingCallerId;
}
