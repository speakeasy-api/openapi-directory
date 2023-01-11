package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InboundSamlSsoProfile
 * A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
**/
public class InboundSamlSsoProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public String customer;
    public InboundSamlSsoProfile withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public InboundSamlSsoProfile withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idpConfig")
    public SamlIdpConfig idpConfig;
    public InboundSamlSsoProfile withIdpConfig(SamlIdpConfig idpConfig) {
        this.idpConfig = idpConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InboundSamlSsoProfile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spConfig")
    public SamlSpConfig spConfig;
    public InboundSamlSsoProfile withSpConfig(SamlSpConfig spConfig) {
        this.spConfig = spConfig;
        return this;
    }
}