package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkloadIdentityPoolProvider
 * A configuration for an external identity provider.
**/
public class WorkloadIdentityPoolProvider {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeCondition")
    public String attributeCondition;
    public WorkloadIdentityPoolProvider withAttributeCondition(String attributeCondition) {
        this.attributeCondition = attributeCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeMapping")
    public java.util.Map<String, String> attributeMapping;
    public WorkloadIdentityPoolProvider withAttributeMapping(java.util.Map<String, String> attributeMapping) {
        this.attributeMapping = attributeMapping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aws")
    public Aws aws;
    public WorkloadIdentityPoolProvider withAws(Aws aws) {
        this.aws = aws;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WorkloadIdentityPoolProvider withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public WorkloadIdentityPoolProvider withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public WorkloadIdentityPoolProvider withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WorkloadIdentityPoolProvider withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oidc")
    public Oidc oidc;
    public WorkloadIdentityPoolProvider withOidc(Oidc oidc) {
        this.oidc = oidc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saml")
    public Saml saml;
    public WorkloadIdentityPoolProvider withSaml(Saml saml) {
        this.saml = saml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public WorkloadIdentityPoolProviderStateEnum state;
    public WorkloadIdentityPoolProvider withState(WorkloadIdentityPoolProviderStateEnum state) {
        this.state = state;
        return this;
    }
}