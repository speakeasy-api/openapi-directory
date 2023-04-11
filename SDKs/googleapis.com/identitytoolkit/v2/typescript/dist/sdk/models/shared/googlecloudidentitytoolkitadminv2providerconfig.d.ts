import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig } from "./googlecloudidentitytoolkitadminv2totpmfaproviderconfig";
/**
 * Describes the state of the MultiFactor Authentication type.
 */
export declare enum GoogleCloudIdentitytoolkitAdminV2ProviderConfigStateEnum {
    MfaStateUnspecified = "MFA_STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED",
    Mandatory = "MANDATORY"
}
/**
 * ProviderConfig describes the supported MFA providers along with their configurations.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2ProviderConfig extends SpeakeasyBase {
    /**
     * Describes the state of the MultiFactor Authentication type.
     */
    state?: GoogleCloudIdentitytoolkitAdminV2ProviderConfigStateEnum;
    /**
     * TotpMFAProviderConfig represents the TOTP based MFA provider.
     */
    totpProviderConfig?: GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig;
}
