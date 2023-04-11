import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAccessTokenServerList: readonly ["https://verify.twilio.com"];
export declare class FetchAccessTokenSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAccessTokenRequest extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Service.
     */
    serviceSid: string;
    /**
     * A 34 character string that uniquely identifies this Access Token.
     */
    sid: string;
}
export declare class FetchAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyV2ServiceAccessToken?: shared.VerifyV2ServiceAccessToken;
}
