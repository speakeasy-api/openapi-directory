import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details that are applicable when `sso_mode` == `SAML_SSO`.
 */
export declare class SamlSsoInfo extends SpeakeasyBase {
    /**
     * Required. Name of the `InboundSamlSsoProfile` to use. Must be of the form `inboundSamlSsoProfiles/{inbound_saml_sso_profile}`.
     */
    inboundSamlSsoProfile?: string;
}
