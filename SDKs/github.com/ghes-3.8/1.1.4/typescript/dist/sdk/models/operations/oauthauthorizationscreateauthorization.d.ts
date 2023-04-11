import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OauthAuthorizationsCreateAuthorizationRequestBody extends SpeakeasyBase {
    /**
     * The OAuth app client key for which to create the token.
     */
    clientId?: string;
    /**
     * The OAuth app client secret for which to create the token.
     */
    clientSecret?: string;
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
     * A list of scopes that this authorization is in.
     */
    scopes?: string[];
}
export declare class OauthAuthorizationsCreateAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    authorization?: shared.Authorization;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
