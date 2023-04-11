import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AccountsIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1AccountsIdRequest extends SpeakeasyBase {
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class GetApiV1AccountsIdResponse extends SpeakeasyBase {
    /**
     * Account record will be returned. Note that `acct` of local users does not include the domain name.
     */
    account?: shared.Account;
    contentType: string;
    /**
     * If the instance is in whitelist mode and the Authorization header is missing or invalid
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
