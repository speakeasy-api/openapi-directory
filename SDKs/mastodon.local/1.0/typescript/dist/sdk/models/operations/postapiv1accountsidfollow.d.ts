import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1AccountsIdFollowSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AccountsIdFollowRequestBody extends SpeakeasyBase {
    /**
     * Receive notifications when this account posts a status? Defaults to false.
     */
    notify?: boolean;
    /**
     * Receive this account's reblogs in home timeline? Defaults to true.
     */
    reblogs?: boolean;
}
export declare class PostApiV1AccountsIdFollowRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class PostApiV1AccountsIdFollowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Trying to follow someone that you block or that blocks you
     */
    error?: shared.ErrorT;
    /**
     * Successfully followed, or account was already followed
     */
    relationship?: shared.Relationship;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
