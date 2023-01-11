package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubordinateConfigChain
 * This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.
**/
public class SubordinateConfigChain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemCertificates")
    public String[] pemCertificates;
    public SubordinateConfigChain withPemCertificates(String[] pemCertificates) {
        this.pemCertificates = pemCertificates;
        return this;
    }
}