package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportDomainRequest
 * Request for the `ImportDomain` method.
**/
public class ImportDomainRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public ImportDomainRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ImportDomainRequest withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
}