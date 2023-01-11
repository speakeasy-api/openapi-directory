package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateTemplateInput
 * A CertificateTemplate refers to a managed template for certificate issuance.
**/
public class CertificateTemplateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CertificateTemplateInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityConstraints")
    public CertificateIdentityConstraints identityConstraints;
    public CertificateTemplateInput withIdentityConstraints(CertificateIdentityConstraints identityConstraints) {
        this.identityConstraints = identityConstraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public CertificateTemplateInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passthroughExtensions")
    public CertificateExtensionConstraints passthroughExtensions;
    public CertificateTemplateInput withPassthroughExtensions(CertificateExtensionConstraints passthroughExtensions) {
        this.passthroughExtensions = passthroughExtensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predefinedValues")
    public X509Parameters predefinedValues;
    public CertificateTemplateInput withPredefinedValues(X509Parameters predefinedValues) {
        this.predefinedValues = predefinedValues;
        return this;
    }
}