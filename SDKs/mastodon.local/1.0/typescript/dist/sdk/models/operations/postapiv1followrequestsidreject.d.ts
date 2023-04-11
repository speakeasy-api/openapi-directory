import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1FollowRequestsIdRejectSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1FollowRequestsIdRejectRequest extends SpeakeasyBase {
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class PostApiV1FollowRequestsIdRejectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Your Relationship with this Account should be unchanged.
     */
    relationship?: shared.Relationship;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
