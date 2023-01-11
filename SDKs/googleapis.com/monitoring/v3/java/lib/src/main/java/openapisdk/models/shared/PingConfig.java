package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PingConfig
 * Information involved in sending ICMP pings alongside public HTTP/TCP checks. For HTTP, the pings are performed for each part of the redirect chain.
**/
public class PingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pingsCount")
    public Integer pingsCount;
    public PingConfig withPingsCount(Integer pingsCount) {
        this.pingsCount = pingsCount;
        return this;
    }
}