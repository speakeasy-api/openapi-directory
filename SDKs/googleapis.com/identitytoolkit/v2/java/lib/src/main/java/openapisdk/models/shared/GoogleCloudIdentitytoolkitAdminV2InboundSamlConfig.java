package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig
 * A pair of SAML RP-IDP configurations when the project acts as the relying party.
**/
public class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idpConfig")
    public GoogleCloudIdentitytoolkitAdminV2IdpConfig idpConfig;
    public GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig withIdpConfig(GoogleCloudIdentitytoolkitAdminV2IdpConfig idpConfig) {
        this.idpConfig = idpConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spConfig")
    public GoogleCloudIdentitytoolkitAdminV2SpConfig spConfig;
    public GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig withSpConfig(GoogleCloudIdentitytoolkitAdminV2SpConfig spConfig) {
        this.spConfig = spConfig;
        return this;
    }
}