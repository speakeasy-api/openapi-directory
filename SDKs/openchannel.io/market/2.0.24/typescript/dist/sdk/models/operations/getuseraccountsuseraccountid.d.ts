import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserAccountsUserAccountIdRequest extends SpeakeasyBase {
    /**
     * The id of the user account to be located
     */
    userAccountId: string;
}
export declare class GetUserAccountsUserAccountIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
