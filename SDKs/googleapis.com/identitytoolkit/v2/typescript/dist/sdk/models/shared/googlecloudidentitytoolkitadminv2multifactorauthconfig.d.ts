import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2ProviderConfig } from "./googlecloudidentitytoolkitadminv2providerconfig";
export declare enum GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum {
    ProviderUnspecified = "PROVIDER_UNSPECIFIED",
    PhoneSms = "PHONE_SMS"
}
/**
 * Whether MultiFactor Authentication has been enabled for this project.
 */
export declare enum GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED",
    Mandatory = "MANDATORY"
}
/**
 * Options related to MultiFactor Authentication for the project.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig extends SpeakeasyBase {
    /**
     * A list of usable second factors for this project.
     */
    enabledProviders?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum[];
    /**
     * A list of usable second factors for this project along with their configurations. This field does not support phone based MFA, for that use the 'enabled_providers' field.
     */
    providerConfigs?: GoogleCloudIdentitytoolkitAdminV2ProviderConfig[];
    /**
     * Whether MultiFactor Authentication has been enabled for this project.
     */
    state?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum;
}
