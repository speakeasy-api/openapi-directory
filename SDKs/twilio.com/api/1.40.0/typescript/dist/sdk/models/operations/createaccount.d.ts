import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateAccountServerList: readonly ["https://api.twilio.com"];
export declare class CreateAccountSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateAccountCreateAccountRequest extends SpeakeasyBase {
    /**
     * A human readable description of the account to create, defaults to `SubAccount Created at {YYYY-MM-DD HH:MM meridian}`
     */
    friendlyName?: string;
}
export declare class CreateAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010Account?: shared.ApiV2010Account;
}
