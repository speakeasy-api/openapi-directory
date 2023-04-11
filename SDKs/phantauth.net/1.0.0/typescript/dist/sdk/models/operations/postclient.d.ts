import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostClientRequestBody extends SpeakeasyBase {
    /**
     * URL of the Client's JSON representation.
     */
    atId?: string;
    /**
     * OAuth 2.0 client identifier string.
     */
    clientId: string;
    /**
     * Human-readable string name of the client to be presented to the end-user during authorization.
     */
    clientName?: string;
    /**
     * OAuth 2.0 client secret string.
     */
    clientSecret?: string;
    /**
     * URL string of a web page providing information about the client.
     */
    clientUri?: string;
    /**
     * Array of strings representing ways to contact people responsible for this client, typically email addresses.
     */
    contacts?: any[];
    /**
     * Array of OAuth 2.0 grant type strings that the client can use at the token endpoint.
     */
    grantTypes?: any[];
    /**
     * Client's JSON Web Key Set [RFC7517] document value, which contains the client's public keys.  The value of this field MUST be a JSON object containing a valid JWK Set.
     */
    jwks?: any[];
    /**
     * URL string referencing the client's JSON Web Key (JWK) Set [RFC7517] document, which contains the client's public keys.
     */
    jwksUri?: string;
    /**
     * An email address used to generate a gravatar.com logo_uri.
     */
    logoEmail?: string;
    /**
     * URL string that references a logo for the client.
     */
    logoUri?: string;
    /**
     * URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data.
     */
    policyUri?: string;
    /**
     * Array of redirection URI strings for use in redirect-based flows such as the authorization code and implicit flows.
     */
    redirectUris?: any[];
    /**
     * Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint.
     */
    responseTypes?: any[];
    /**
     * String containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens.
     */
    scope?: string;
    /**
     * A unique identifier string (e.g., a Universally Unique Identifier (UUID)) assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered.
     */
    softwareId?: string;
    /**
     * A version identifier string for the client software identified by software_id.
     */
    softwareVersion?: string;
    /**
     * String indicator of the requested authentication method for the token endpoint.
     */
    tokenEndpointAuthMethod?: string;
    /**
     * URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client.
     */
    tosUri?: string;
}
export declare class PostClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
