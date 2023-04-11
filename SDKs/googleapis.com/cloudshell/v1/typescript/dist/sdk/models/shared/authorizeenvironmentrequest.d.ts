import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for AuthorizeEnvironment.
 */
export declare class AuthorizeEnvironmentRequest extends SpeakeasyBase {
    /**
     * The OAuth access token that should be sent to the environment.
     */
    accessToken?: string;
    /**
     * The time when the credentials expire. If not set, defaults to one hour from when the server received the request.
     */
    expireTime?: string;
    /**
     * The OAuth ID token that should be sent to the environment.
     */
    idToken?: string;
}
