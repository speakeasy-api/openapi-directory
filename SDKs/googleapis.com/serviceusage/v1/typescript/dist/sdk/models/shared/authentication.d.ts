import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationRule } from "./authenticationrule";
import { AuthProvider } from "./authprovider";
/**
 * `Authentication` defines the authentication configuration for API methods provided by an API service. Example: name: calendar.googleapis.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth - selector: google.calendar.Delegate oauth: canonical_scopes: https://www.googleapis.com/auth/calendar.read
 */
export declare class Authentication extends SpeakeasyBase {
    /**
     * Defines a set of authentication providers that a service supports.
     */
    providers?: AuthProvider[];
    /**
     * A list of authentication rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order.
     */
    rules?: AuthenticationRule[];
}
