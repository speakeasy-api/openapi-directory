import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow.
 */
export declare class AuthorizationCodeLink extends SpeakeasyBase {
    /**
     * The client ID assigned to the GCP Connectors OAuth app for the connector data source.
     */
    clientId?: string;
    /**
     * Whether to enable PKCE for the auth code flow.
     */
    enablePkce?: boolean;
    /**
     * The scopes for which the user will authorize GCP Connectors on the connector data source.
     */
    scopes?: string[];
    /**
     * The base URI the user must click to trigger the authorization code login flow.
     */
    uri?: string;
}
