import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteAccountsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the account.
     */
    id: number;
}
export declare class DeleteAccountsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
