import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchShortCodeServerList: readonly ["https://api.twilio.com"];
export declare class FetchShortCodeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchShortCodeRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource(s) to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the ShortCode resource to fetch
     */
    sid: string;
}
export declare class FetchShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountShortCode?: shared.ApiV2010AccountShortCode;
}
