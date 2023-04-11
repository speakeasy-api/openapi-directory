import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchConnectAppServerList: readonly ["https://api.twilio.com"];
export declare class FetchConnectAppSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchConnectAppRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the ConnectApp resource to fetch.
     */
    sid: string;
}
export declare class FetchConnectAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountConnectApp?: shared.ApiV2010AccountConnectApp;
}
