import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSigningKeyServerList: readonly ["https://api.twilio.com"];
export declare class FetchSigningKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSigningKeyRequest extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchSigningKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSigningKey?: shared.ApiV2010AccountSigningKey;
}
