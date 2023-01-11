package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateEphemeralCertResponse
 * Ephemeral certificate creation request.
**/
public class GenerateEphemeralCertResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ephemeralCert")
    public SslCert ephemeralCert;
    public GenerateEphemeralCertResponse withEphemeralCert(SslCert ephemeralCert) {
        this.ephemeralCert = ephemeralCert;
        return this;
    }
}