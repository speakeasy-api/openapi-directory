import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigVariableTemplate } from "./configvariabletemplate";
/**
 * The type of authentication configured.
 */
export declare enum AuthConfigTemplateAuthTypeEnum {
    AuthTypeUnspecified = "AUTH_TYPE_UNSPECIFIED",
    UserPassword = "USER_PASSWORD",
    Oauth2JwtBearer = "OAUTH2_JWT_BEARER",
    Oauth2ClientCredentials = "OAUTH2_CLIENT_CREDENTIALS",
    SshPublicKey = "SSH_PUBLIC_KEY",
    Oauth2AuthCodeFlow = "OAUTH2_AUTH_CODE_FLOW"
}
/**
 * AuthConfigTemplate defines required field over an authentication type.
 */
export declare class AuthConfigTemplate extends SpeakeasyBase {
    /**
     * The type of authentication configured.
     */
    authType?: AuthConfigTemplateAuthTypeEnum;
    /**
     * Config variables to describe an `AuthConfig` for a `Connection`.
     */
    configVariableTemplates?: ConfigVariableTemplate[];
    /**
     * Connector specific description for an authentication template.
     */
    description?: string;
    /**
     * Display name for authentication template.
     */
    displayName?: string;
}
