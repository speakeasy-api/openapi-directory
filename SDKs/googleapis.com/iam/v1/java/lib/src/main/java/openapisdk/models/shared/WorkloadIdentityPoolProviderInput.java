package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkloadIdentityPoolProviderInput
 * A configuration for an external identity provider.
**/
public class WorkloadIdentityPoolProviderInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeCondition")
    public String attributeCondition;
    public WorkloadIdentityPoolProviderInput withAttributeCondition(String attributeCondition) {
        this.attributeCondition = attributeCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeMapping")
    public java.util.Map<String, String> attributeMapping;
    public WorkloadIdentityPoolProviderInput withAttributeMapping(java.util.Map<String, String> attributeMapping) {
        this.attributeMapping = attributeMapping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aws")
    public Aws aws;
    public WorkloadIdentityPoolProviderInput withAws(Aws aws) {
        this.aws = aws;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WorkloadIdentityPoolProviderInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public WorkloadIdentityPoolProviderInput withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public WorkloadIdentityPoolProviderInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oidc")
    public Oidc oidc;
    public WorkloadIdentityPoolProviderInput withOidc(Oidc oidc) {
        this.oidc = oidc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saml")
    public Saml saml;
    public WorkloadIdentityPoolProviderInput withSaml(Saml saml) {
        this.saml = saml;
        return this;
    }
}