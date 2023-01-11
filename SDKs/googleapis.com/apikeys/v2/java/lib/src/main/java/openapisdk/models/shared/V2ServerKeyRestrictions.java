package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * V2ServerKeyRestrictions
 * The IP addresses of callers that are allowed to use the key.
**/
public class V2ServerKeyRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedIps")
    public String[] allowedIps;
    public V2ServerKeyRestrictions withAllowedIps(String[] allowedIps) {
        this.allowedIps = allowedIps;
        return this;
    }
}