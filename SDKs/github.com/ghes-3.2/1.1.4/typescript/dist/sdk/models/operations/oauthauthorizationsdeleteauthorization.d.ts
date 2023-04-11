import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OauthAuthorizationsDeleteAuthorizationRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the authorization.
     */
    authorizationId: number;
}
export declare class OauthAuthorizationsDeleteAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
