import { SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
/**
 * Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.
 */
export declare class Oauth2ClientCredentials extends SpeakeasyBase {
    /**
     * The client identifier.
     */
    clientId?: string;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    clientSecret?: Secret;
}
