import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCallServerList: readonly ["https://api.twilio.com"];
export declare class FetchCallSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCallRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call resource(s) to fetch.
     */
    accountSid: string;
    /**
     * The SID of the Call resource to fetch.
     */
    sid: string;
}
export declare class FetchCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountCall?: shared.ApiV2010AccountCall;
}
