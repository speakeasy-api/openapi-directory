import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig } from "./googlecloudidentitytoolkitadminv2applesigninconfig";
/**
 * Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig extends SpeakeasyBase {
    /**
     * Additional config for SignInWithApple.
     */
    appleSignInConfig?: GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig;
    /**
     * OAuth client ID.
     */
    clientId?: string;
    /**
     * OAuth client secret.
     */
    clientSecret?: string;
    /**
     * True if allows the user to sign in with the provider.
     */
    enabled?: boolean;
    /**
     * The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     */
    name?: string;
}
