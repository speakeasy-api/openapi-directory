import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier for the account.
     *
     * @remarks
     *
     */
    id: string;
}
export declare class GetAccountsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    getAccountResponse?: shared.GetAccountResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
