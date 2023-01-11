package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CertChain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificates")
    public String[] certificates;
    public CertChain withCertificates(String[] certificates) {
        this.certificates = certificates;
        return this;
    }
}