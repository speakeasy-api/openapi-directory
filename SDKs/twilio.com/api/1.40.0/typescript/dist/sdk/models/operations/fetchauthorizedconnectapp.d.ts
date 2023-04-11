import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAuthorizedConnectAppServerList: readonly ["https://api.twilio.com"];
export declare class FetchAuthorizedConnectAppSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAuthorizedConnectAppRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AuthorizedConnectApp resource to fetch.
     */
    accountSid: string;
    /**
     * The SID of the Connect App to fetch.
     */
    connectAppSid: string;
}
export declare class FetchAuthorizedConnectAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountAuthorizedConnectApp?: shared.ApiV2010AccountAuthorizedConnectApp;
}
