import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OauthAuthorizationsUpdateAuthorizationRequestBody extends SpeakeasyBase {
    /**
     * A list of scopes to add to this authorization.
     */
    addScopes?: string[];
    /**
     * A unique string to distinguish an authorization from others created for the same client ID and user.
     */
    fingerprint?: string;
    /**
     * A note to remind you what the OAuth token is for.
     */
    note?: string;
    /**
     * A URL to remind you what app the OAuth token is for.
     */
    noteUrl?: string;
    /**
     * A list of scopes to remove from this authorization.
     */
    removeScopes?: string[];
    /**
     * A list of scopes that this authorization is in.
     */
    scopes?: string[];
}
export declare class OauthAuthorizationsUpdateAuthorizationRequest extends SpeakeasyBase {
    requestBody?: OauthAuthorizationsUpdateAuthorizationRequestBody;
    /**
     * The unique identifier of the authorization.
     */
    authorizationId: number;
}
export declare class OauthAuthorizationsUpdateAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    authorization?: shared.Authorization;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
