import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAccountServerList: readonly ["https://api.twilio.com"];
export declare class FetchAccountSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAccountRequest extends SpeakeasyBase {
    /**
     * The Account Sid that uniquely identifies the account to fetch
     */
    sid: string;
}
export declare class FetchAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010Account?: shared.ApiV2010Account;
}
