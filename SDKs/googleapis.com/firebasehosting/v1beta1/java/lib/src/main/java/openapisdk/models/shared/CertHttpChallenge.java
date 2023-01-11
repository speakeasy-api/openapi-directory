package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertHttpChallenge
 * Represents an HTTP certificate challenge.
**/
public class CertHttpChallenge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public CertHttpChallenge withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public CertHttpChallenge withToken(String token) {
        this.token = token;
        return this;
    }
}