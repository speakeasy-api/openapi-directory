import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1FollowRequestsIdAuthorizeSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1FollowRequestsIdAuthorizeRequest extends SpeakeasyBase {
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class PostApiV1FollowRequestsIdAuthorizeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Your Relationship with this account should be updated so that you are followed_by this account.
     */
    relationship?: shared.Relationship;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
