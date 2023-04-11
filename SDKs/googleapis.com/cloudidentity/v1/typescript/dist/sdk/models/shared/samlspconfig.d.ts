import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SAML SP (service provider) configuration.
 */
export declare class SamlSpConfig extends SpeakeasyBase {
    /**
     * Output only. The SAML **Assertion Consumer Service (ACS) URL** to be used for the IDP-initiated login. Assumed to accept response messages via the `HTTP-POST` binding.
     */
    assertionConsumerServiceUri?: string;
    /**
     * Output only. The SAML **Entity ID** for this service provider.
     */
    entityId?: string;
}
