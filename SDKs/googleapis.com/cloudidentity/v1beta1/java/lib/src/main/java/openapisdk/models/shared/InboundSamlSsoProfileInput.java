package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InboundSamlSsoProfileInput
 * A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
**/
public class InboundSamlSsoProfileInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public String customer;
    public InboundSamlSsoProfileInput withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public InboundSamlSsoProfileInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idpConfig")
    public SamlIdpConfig idpConfig;
    public InboundSamlSsoProfileInput withIdpConfig(SamlIdpConfig idpConfig) {
        this.idpConfig = idpConfig;
        return this;
    }
}