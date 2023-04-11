import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings to authenticate users using a generic OAuth2 provider
 */
export declare class GenericOauth2ModuleConfig extends SpeakeasyBase {
    /**
     * Field name to get access token
     */
    accessTokenField: string;
    /**
     * OAuth authorize URL
     */
    authorizeUrl: string;
    /**
     * Otoroshi callback URL
     */
    callbackUrl: string;
    /**
     * The claims of the token
     */
    claims?: string;
    /**
     * OAuth Client id
     */
    clientId: string;
    /**
     * OAuth Client secret
     */
    clientSecret: string;
    /**
     * Description of the config
     */
    desc: string;
    /**
     * Field name to get email from user profile
     */
    emailField: string;
    /**
     * Unique id of the config
     */
    id: string;
    /**
     * Algo. settings to verify JWT token
     */
    jwtVerifier?: any;
    /**
     * OAuth login URL
     */
    loginUrl: string;
    /**
     * OAuth logout URL
     */
    logoutUrl: string;
    /**
     * Name of the config
     */
    name: string;
    /**
     * Field name to get name from user profile
     */
    nameField: string;
    /**
     * URL of the OIDC config. file
     */
    oidConfig?: string;
    /**
     * Field name to get otoroshi metadata from. You can specify sub fields using | as separator
     */
    otoroshiDataField: string;
    /**
     * The user profile will be read from the JWT token in id_token
     */
    readProfileFromToken?: boolean;
    /**
     * The scope of the token
     */
    scope?: string;
    /**
     * Max age of the session
     */
    sessionMaxAge: number;
    /**
     * OAuth token URL
     */
    tokenUrl: string;
    /**
     * Type of settings. value is oauth2
     */
    type: string;
    /**
     * Use for redirection to actual service
     */
    useCookies?: boolean;
    /**
     * Use JSON or URL Form Encoded as payload with the OAuth provider
     */
    useJson?: boolean;
    /**
     * OAuth userinfo to get user profile
     */
    userInfoUrl: string;
}
