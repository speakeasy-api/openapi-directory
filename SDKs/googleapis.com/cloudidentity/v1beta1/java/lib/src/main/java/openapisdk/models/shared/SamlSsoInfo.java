package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SamlSsoInfo
 * Details that are applicable when `sso_mode` == `SAML_SSO`.
**/
public class SamlSsoInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inboundSamlSsoProfile")
    public String inboundSamlSsoProfile;
    public SamlSsoInfo withInboundSamlSsoProfile(String inboundSamlSsoProfile) {
        this.inboundSamlSsoProfile = inboundSamlSsoProfile;
        return this;
    }
}