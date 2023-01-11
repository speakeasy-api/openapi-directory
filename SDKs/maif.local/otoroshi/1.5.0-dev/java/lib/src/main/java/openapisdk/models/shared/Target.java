package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Target
 * A Target is where an HTTP call will be forwarded in the end from a service domain
**/
public class Target {
    @JsonProperty("host")
    public String host;
    public Target withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonProperty("scheme")
    public String scheme;
    public Target withScheme(String scheme) {
        this.scheme = scheme;
        return this;
    }
}