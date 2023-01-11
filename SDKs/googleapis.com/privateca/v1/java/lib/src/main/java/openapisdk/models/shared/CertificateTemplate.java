package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateTemplate
 * A CertificateTemplate refers to a managed template for certificate issuance.
**/
public class CertificateTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public CertificateTemplate withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CertificateTemplate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityConstraints")
    public CertificateIdentityConstraints identityConstraints;
    public CertificateTemplate withIdentityConstraints(CertificateIdentityConstraints identityConstraints) {
        this.identityConstraints = identityConstraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public CertificateTemplate withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CertificateTemplate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passthroughExtensions")
    public CertificateExtensionConstraints passthroughExtensions;
    public CertificateTemplate withPassthroughExtensions(CertificateExtensionConstraints passthroughExtensions) {
        this.passthroughExtensions = passthroughExtensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predefinedValues")
    public X509Parameters predefinedValues;
    public CertificateTemplate withPredefinedValues(X509Parameters predefinedValues) {
        this.predefinedValues = predefinedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public CertificateTemplate withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}