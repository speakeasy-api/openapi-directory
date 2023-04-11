import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2IdpConfig } from "./googlecloudidentitytoolkitadminv2idpconfig";
import { GoogleCloudIdentitytoolkitAdminV2SpConfig, GoogleCloudIdentitytoolkitAdminV2SpConfigInput } from "./googlecloudidentitytoolkitadminv2spconfig";
/**
 * A pair of SAML RP-IDP configurations when the project acts as the relying party.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig extends SpeakeasyBase {
    /**
     * The config's display name set by developers.
     */
    displayName?: string;
    /**
     * True if allows the user to sign in with the provider.
     */
    enabled?: boolean;
    /**
     * The SAML IdP (Identity Provider) configuration when the project acts as the relying party.
     */
    idpConfig?: GoogleCloudIdentitytoolkitAdminV2IdpConfig;
    /**
     * The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests.
     */
    name?: string;
    /**
     * The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
     */
    spConfig?: GoogleCloudIdentitytoolkitAdminV2SpConfig;
}
/**
 * A pair of SAML RP-IDP configurations when the project acts as the relying party.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput extends SpeakeasyBase {
    /**
     * The config's display name set by developers.
     */
    displayName?: string;
    /**
     * True if allows the user to sign in with the provider.
     */
    enabled?: boolean;
    /**
     * The SAML IdP (Identity Provider) configuration when the project acts as the relying party.
     */
    idpConfig?: GoogleCloudIdentitytoolkitAdminV2IdpConfig;
    /**
     * The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests.
     */
    name?: string;
    /**
     * The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
     */
    spConfig?: GoogleCloudIdentitytoolkitAdminV2SpConfigInput;
}
