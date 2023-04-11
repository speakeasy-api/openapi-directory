import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1AccountsIdUnfollowSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AccountsIdUnfollowRequest extends SpeakeasyBase {
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class PostApiV1AccountsIdUnfollowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Successfully unfollowed, or account was already not followed
     */
    relationship?: shared.Relationship;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
