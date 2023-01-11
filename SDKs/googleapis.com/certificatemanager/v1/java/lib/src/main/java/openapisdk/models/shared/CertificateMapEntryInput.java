package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateMapEntryInput
 * Defines a certificate map entry.
**/
public class CertificateMapEntryInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificates")
    public String[] certificates;
    public CertificateMapEntryInput withCertificates(String[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CertificateMapEntryInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public CertificateMapEntryInput withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public CertificateMapEntryInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matcher")
    public CertificateMapEntryMatcherEnum matcher;
    public CertificateMapEntryInput withMatcher(CertificateMapEntryMatcherEnum matcher) {
        this.matcher = matcher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CertificateMapEntryInput withName(String name) {
        this.name = name;
        return this;
    }
}