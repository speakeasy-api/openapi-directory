import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchApplicationServerList: readonly ["https://api.twilio.com"];
export declare class FetchApplicationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchApplicationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Application resource to fetch.
     */
    sid: string;
}
export declare class FetchApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountApplication?: shared.ApiV2010AccountApplication;
}
