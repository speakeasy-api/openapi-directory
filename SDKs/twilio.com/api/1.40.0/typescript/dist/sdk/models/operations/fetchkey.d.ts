import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchKeyServerList: readonly ["https://api.twilio.com"];
export declare class FetchKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchKeyRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Key resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Key resource to fetch.
     */
    sid: string;
}
export declare class FetchKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountKey?: shared.ApiV2010AccountKey;
}
