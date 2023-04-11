import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class OauthV1OpenidDiscovery extends SpeakeasyBase {
    /**
     * The endpoint that validates all authorization requests.
     */
    authorizationEndpoint?: string;
    /**
     * A collection of claims supported by authorization server for identity token
     */
    claimsSupported?: string[];
    /**
     * The endpoint that validates all device code related authorization requests.
     */
    deviceAuthorizationEndpoint?: string;
    /**
     * A collection of JWS signing algorithms supported by authorization server to sign identity token.
     */
    idTokenSigningAlgValuesSupported?: string[];
    /**
     * The URL of the party that will create the token and sign it with its private key.
     */
    issuer?: string;
    /**
     * The URL of your JSON Web Key Set. This set is a collection of JSON Web Keys, a standard method for representing cryptographic keys in a JSON structure.
     */
    jwkUri?: string;
    /**
     * A collection of response type supported by authorization server.
     */
    responseTypeSupported?: string[];
    /**
     * The endpoint used to revoke access or refresh tokens issued by the authorization server.
     */
    revocationEndpoint?: string;
    /**
     * A collection of scopes supported by authorization server for identity token
     */
    scopesSupported?: string[];
    /**
     * A collection of subject by authorization server.
     */
    subjectTypeSupported?: string[];
    /**
     * The URL of the token endpoint. After a client has received an authorization code, that code is presented to the token endpoint and exchanged for an identity token, an access token, and a refresh token.
     */
    tokenEndpoint?: string;
    url?: string;
    /**
     * The URL of the user info endpoint, which returns user profile information to a client. Keep in mind that the user info endpoint returns only the information that has been requested.
     */
    userinfoEndpoint?: string;
}
