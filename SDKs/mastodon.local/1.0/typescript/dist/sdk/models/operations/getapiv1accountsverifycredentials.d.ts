import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AccountsVerifyCredentialsResponse extends SpeakeasyBase {
    /**
     * Note the extra `source` property, which is not visible on accounts other than your own. Also note that plain-text is used within `source` and HTML is used for their corresponding properties such as `note` and `fields`.
     */
    account?: shared.Account;
    contentType: string;
    /**
     * Your credential verification will fail if the token is invalid or incorrect.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
