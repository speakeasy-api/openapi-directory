import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUserInfoServerList: readonly ["https://oauth.twilio.com"];
export declare class FetchUserInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    oauthV1UserInfo?: shared.OauthV1UserInfo;
}
