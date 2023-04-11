import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaCredential } from "./googlecloudintegrationsv1alphacredential";
/**
 * Credential type of the encrypted credential.
 */
export declare enum GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum {
    CredentialTypeUnspecified = "CREDENTIAL_TYPE_UNSPECIFIED",
    UsernameAndPassword = "USERNAME_AND_PASSWORD",
    ApiKey = "API_KEY",
    Oauth2AuthorizationCode = "OAUTH2_AUTHORIZATION_CODE",
    Oauth2Implicit = "OAUTH2_IMPLICIT",
    Oauth2ClientCredentials = "OAUTH2_CLIENT_CREDENTIALS",
    Oauth2ResourceOwnerCredentials = "OAUTH2_RESOURCE_OWNER_CREDENTIALS",
    Jwt = "JWT",
    AuthToken = "AUTH_TOKEN",
    ServiceAccount = "SERVICE_ACCOUNT",
    ClientCertificateOnly = "CLIENT_CERTIFICATE_ONLY",
    OidcToken = "OIDC_TOKEN"
}
/**
 * The status of the auth config.
 */
export declare enum GoogleCloudIntegrationsV1alphaAuthConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Valid = "VALID",
    Invalid = "INVALID",
    SoftDeleted = "SOFT_DELETED",
    Expired = "EXPIRED",
    Unauthorized = "UNAUTHORIZED",
    Unsupported = "UNSUPPORTED"
}
/**
 * The visibility of the auth config.
 */
export declare enum GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum {
    AuthConfigVisibilityUnspecified = "AUTH_CONFIG_VISIBILITY_UNSPECIFIED",
    Private = "PRIVATE",
    ClientVisible = "CLIENT_VISIBLE"
}
/**
 * The AuthConfig resource use to hold channels and connection config data.
 */
export declare class GoogleCloudIntegrationsV1alphaAuthConfig extends SpeakeasyBase {
    /**
     * Certificate id for client certificate
     */
    certificateId?: string;
    /**
     * Output only. The timestamp when the auth config is created.
     */
    createTime?: string;
    /**
     * The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
     */
    creatorEmail?: string;
    /**
     * Credential type of the encrypted credential.
     */
    credentialType?: GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum;
    /**
     * Defines parameters for a single, canonical credential.
     */
    decryptedCredential?: GoogleCloudIntegrationsV1alphaCredential;
    /**
     * A description of the auth config.
     */
    description?: string;
    /**
     * The name of the auth config.
     */
    displayName?: string;
    /**
     * Auth credential encrypted by Cloud KMS. Can be decrypted as Credential with proper KMS key.
     */
    encryptedCredential?: string;
    /**
     * User can define the time to receive notification after which the auth config becomes invalid. Support up to 30 days. Support granularity in hours.
     */
    expiryNotificationDuration?: string[];
    /**
     * The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
     */
    lastModifierEmail?: string;
    /**
     * Resource name of the SFDC instance projects/{project}/locations/{location}/authConfigs/{authConfig}.
     */
    name?: string;
    /**
     * User provided expiry time to override. For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.
     */
    overrideValidTime?: string;
    /**
     * The reason / details of the current status.
     */
    reason?: string;
    /**
     * The status of the auth config.
     */
    state?: GoogleCloudIntegrationsV1alphaAuthConfigStateEnum;
    /**
     * Output only. The timestamp when the auth config is modified.
     */
    updateTime?: string;
    /**
     * The time until the auth config is valid. Empty or max value is considered the auth config won't expire.
     */
    validTime?: string;
    /**
     * The visibility of the auth config.
     */
    visibility?: GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum;
}
/**
 * The AuthConfig resource use to hold channels and connection config data.
 */
export declare class GoogleCloudIntegrationsV1alphaAuthConfigInput extends SpeakeasyBase {
    /**
     * Certificate id for client certificate
     */
    certificateId?: string;
    /**
     * The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
     */
    creatorEmail?: string;
    /**
     * Credential type of the encrypted credential.
     */
    credentialType?: GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum;
    /**
     * Defines parameters for a single, canonical credential.
     */
    decryptedCredential?: GoogleCloudIntegrationsV1alphaCredential;
    /**
     * A description of the auth config.
     */
    description?: string;
    /**
     * The name of the auth config.
     */
    displayName?: string;
    /**
     * Auth credential encrypted by Cloud KMS. Can be decrypted as Credential with proper KMS key.
     */
    encryptedCredential?: string;
    /**
     * User can define the time to receive notification after which the auth config becomes invalid. Support up to 30 days. Support granularity in hours.
     */
    expiryNotificationDuration?: string[];
    /**
     * The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call.
     */
    lastModifierEmail?: string;
    /**
     * Resource name of the SFDC instance projects/{project}/locations/{location}/authConfigs/{authConfig}.
     */
    name?: string;
    /**
     * User provided expiry time to override. For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.
     */
    overrideValidTime?: string;
    /**
     * The reason / details of the current status.
     */
    reason?: string;
    /**
     * The status of the auth config.
     */
    state?: GoogleCloudIntegrationsV1alphaAuthConfigStateEnum;
    /**
     * The time until the auth config is valid. Empty or max value is considered the auth config won't expire.
     */
    validTime?: string;
    /**
     * The visibility of the auth config.
     */
    visibility?: GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum;
}
