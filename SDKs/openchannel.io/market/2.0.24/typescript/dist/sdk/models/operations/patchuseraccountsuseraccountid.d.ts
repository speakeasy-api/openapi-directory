import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchUserAccountsUserAccountIdRequest extends SpeakeasyBase {
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: string;
    /**
     * The contact email address
     */
    email?: string;
    /**
     * The user account name
     */
    name?: string;
    /**
     * The id of the user account to be updated
     */
    userAccountId: string;
    /**
     * The Id of the user that this account belongs to
     */
    userId: string;
}
export declare class PatchUserAccountsUserAccountIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
