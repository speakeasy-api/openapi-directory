import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of verifying the IDP assertion.
 */
export declare class VerifyAssertionResponse extends SpeakeasyBase {
    /**
     * The action code.
     */
    action?: string;
    /**
     * URL for OTA app installation.
     */
    appInstallationUrl?: string;
    /**
     * The custom scheme used by mobile app.
     */
    appScheme?: string;
    /**
     * The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
     */
    context?: string;
    /**
     * The birth date of the IdP account.
     */
    dateOfBirth?: string;
    /**
     * The display name of the user.
     */
    displayName?: string;
    /**
     * The email returned by the IdP. NOTE: The federated login user may not own the email.
     */
    email?: string;
    /**
     * It's true if the email is recycled.
     */
    emailRecycled?: boolean;
    /**
     * The value is true if the IDP is also the email provider. It means the user owns the email.
     */
    emailVerified?: boolean;
    /**
     * Client error code.
     */
    errorMessage?: string;
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string;
    /**
     * The unique ID identifies the IdP account.
     */
    federatedId?: string;
    /**
     * The first name of the user.
     */
    firstName?: string;
    /**
     * The full name of the user.
     */
    fullName?: string;
    /**
     * The ID token.
     */
    idToken?: string;
    /**
     * It's the identifier param in the createAuthUri request if the identifier is an email. It can be used to check whether the user input email is different from the asserted email.
     */
    inputEmail?: string;
    /**
     * True if it's a new user sign-in, false if it's a returning user.
     */
    isNewUser?: boolean;
    /**
     * The fixed string "identitytoolkit#VerifyAssertionResponse".
     */
    kind?: string;
    /**
     * The language preference of the user.
     */
    language?: string;
    /**
     * The last name of the user.
     */
    lastName?: string;
    /**
     * The RP local ID if it's already been mapped to the IdP account identified by the federated ID.
     */
    localId?: string;
    /**
     * Whether the assertion is from a non-trusted IDP and need account linking confirmation.
     */
    needConfirmation?: boolean;
    /**
     * Whether need client to supply email to complete the federated login flow.
     */
    needEmail?: boolean;
    /**
     * The nick name of the user.
     */
    nickName?: string;
    /**
     * The OAuth2 access token.
     */
    oauthAccessToken?: string;
    /**
     * The OAuth2 authorization code.
     */
    oauthAuthorizationCode?: string;
    /**
     * The lifetime in seconds of the OAuth2 access token.
     */
    oauthExpireIn?: number;
    /**
     * The OIDC id token.
     */
    oauthIdToken?: string;
    /**
     * The user approved request token for the OpenID OAuth extension.
     */
    oauthRequestToken?: string;
    /**
     * The scope for the OpenID OAuth extension.
     */
    oauthScope?: string;
    /**
     * The OAuth1 access token secret.
     */
    oauthTokenSecret?: string;
    /**
     * The original email stored in the mapping storage. It's returned when the federated ID is associated to a different email.
     */
    originalEmail?: string;
    /**
     * The URI of the public accessible profiel picture.
     */
    photoUrl?: string;
    /**
     * The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. If the "providerId" param is set to OpenID OP identifer other than the whilte listed IdPs the OP identifier is returned. If the "identifier" param is federated ID in the createAuthUri request. The domain part of the federated ID is returned.
     */
    providerId?: string;
    /**
     * Raw IDP-returned user info.
     */
    rawUserInfo?: string;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string;
    /**
     * The screen_name of a Twitter user or the login name at Github.
     */
    screenName?: string;
    /**
     * The timezone of the user.
     */
    timeZone?: string;
    /**
     * When action is 'map', contains the idps which can be used for confirmation.
     */
    verifiedProvider?: string[];
}
