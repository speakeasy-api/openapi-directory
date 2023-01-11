package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateInput
 * A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
**/
public class CertificateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawDer")
    public String rawDer;
    public CertificateInput withRawDer(String rawDer) {
        this.rawDer = rawDer;
        return this;
    }
}