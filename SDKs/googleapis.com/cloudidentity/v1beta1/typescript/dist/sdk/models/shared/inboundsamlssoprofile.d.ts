import { SpeakeasyBase } from "../../../internal/utils";
import { SamlIdpConfig } from "./samlidpconfig";
import { SamlSpConfig } from "./samlspconfig";
/**
 * A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
 */
export declare class InboundSamlSsoProfile extends SpeakeasyBase {
    /**
     * Immutable. The customer. For example: `customers/C0123abc`.
     */
    customer?: string;
    /**
     * Human-readable name of the SAML SSO profile.
     */
    displayName?: string;
    /**
     * SAML IDP (identity provider) configuration.
     */
    idpConfig?: SamlIdpConfig;
    /**
     * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the SAML SSO profile.
     */
    name?: string;
    /**
     * SAML SP (service provider) configuration.
     */
    spConfig?: SamlSpConfig;
}
/**
 * A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
 */
export declare class InboundSamlSsoProfileInput extends SpeakeasyBase {
    /**
     * Immutable. The customer. For example: `customers/C0123abc`.
     */
    customer?: string;
    /**
     * Human-readable name of the SAML SSO profile.
     */
    displayName?: string;
    /**
     * SAML IDP (identity provider) configuration.
     */
    idpConfig?: SamlIdpConfig;
}
