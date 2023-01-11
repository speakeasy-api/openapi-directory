package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SslCertsInsertRequest
 * SslCerts insert request.
**/
public class SslCertsInsertRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonName")
    public String commonName;
    public SslCertsInsertRequest withCommonName(String commonName) {
        this.commonName = commonName;
        return this;
    }
}