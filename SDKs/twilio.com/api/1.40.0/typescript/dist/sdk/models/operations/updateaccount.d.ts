import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateAccountServerList: readonly ["https://api.twilio.com"];
export declare class UpdateAccountSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateAccountUpdateAccountRequest extends SpeakeasyBase {
    /**
     * Update the human-readable description of this Account
     */
    friendlyName?: string;
    status?: shared.AccountEnumStatusEnum;
}
export declare class UpdateAccountRequest extends SpeakeasyBase {
    requestBody?: UpdateAccountUpdateAccountRequest;
    /**
     * The Account Sid that uniquely identifies the account to update
     */
    sid: string;
}
export declare class UpdateAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010Account?: shared.ApiV2010Account;
}
