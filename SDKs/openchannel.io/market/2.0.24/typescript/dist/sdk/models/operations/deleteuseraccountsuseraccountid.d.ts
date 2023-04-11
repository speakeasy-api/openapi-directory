import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserAccountsUserAccountIdRequest extends SpeakeasyBase {
    /**
     * The id of the user account to be removed
     */
    userAccountId: string;
}
export declare class DeleteUserAccountsUserAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
