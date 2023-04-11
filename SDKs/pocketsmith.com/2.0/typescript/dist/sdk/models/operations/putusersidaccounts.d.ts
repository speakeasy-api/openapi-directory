import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersIdAccountsRequestBody extends SpeakeasyBase {
    /**
     * List the account objects in their new display order.
     */
    accounts: shared.Account[];
}
export declare class PutUsersIdAccountsRequest extends SpeakeasyBase {
    requestBody?: PutUsersIdAccountsRequestBody;
    /**
     * The unique identifier of the user.
     */
    id: number;
}
export declare class PutUsersIdAccountsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    accounts?: shared.Account[];
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
