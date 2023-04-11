import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for the AzureAD Auth flow.
 */
export declare class IdentityServiceAzureADConfig extends SpeakeasyBase {
    /**
     * ID for the registered client application that makes authentication requests to the Azure AD identity provider.
     */
    clientId?: string;
    /**
     * Input only. Unencrypted AzureAD client secret will be passed to the GKE Hub CLH.
     */
    clientSecret?: string;
    /**
     * Output only. Encrypted AzureAD client secret.
     */
    encryptedClientSecret?: string;
    /**
     * The redirect URL that kubectl uses for authorization.
     */
    kubectlRedirectUri?: string;
    /**
     * Kind of Azure AD account to be authenticated. Supported values are or for accounts belonging to a specific tenant.
     */
    tenant?: string;
}
/**
 * Configuration for the AzureAD Auth flow.
 */
export declare class IdentityServiceAzureADConfigInput extends SpeakeasyBase {
    /**
     * ID for the registered client application that makes authentication requests to the Azure AD identity provider.
     */
    clientId?: string;
    /**
     * Input only. Unencrypted AzureAD client secret will be passed to the GKE Hub CLH.
     */
    clientSecret?: string;
    /**
     * The redirect URL that kubectl uses for authorization.
     */
    kubectlRedirectUri?: string;
    /**
     * Kind of Azure AD account to be authenticated. Supported values are or for accounts belonging to a specific tenant.
     */
    tenant?: string;
}
