package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput
 * A pair of SAML RP-IDP configurations when the project acts as the relying party.
**/
public class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idpConfig")
    public GoogleCloudIdentitytoolkitAdminV2IdpConfig idpConfig;
    public GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput withIdpConfig(GoogleCloudIdentitytoolkitAdminV2IdpConfig idpConfig) {
        this.idpConfig = idpConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spConfig")
    public GoogleCloudIdentitytoolkitAdminV2SpConfigInput spConfig;
    public GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput withSpConfig(GoogleCloudIdentitytoolkitAdminV2SpConfigInput spConfig) {
        this.spConfig = spConfig;
        return this;
    }
}