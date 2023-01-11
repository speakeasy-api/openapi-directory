package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Destination
 * Specification of traffic destination attributes.
**/
public class Destination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hosts")
    public String[] hosts;
    public Destination withHosts(String[] hosts) {
        this.hosts = hosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpHeaderMatch")
    public HttpHeaderMatch httpHeaderMatch;
    public Destination withHttpHeaderMatch(HttpHeaderMatch httpHeaderMatch) {
        this.httpHeaderMatch = httpHeaderMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methods")
    public String[] methods;
    public Destination withMethods(String[] methods) {
        this.methods = methods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports")
    public Long[] ports;
    public Destination withPorts(Long[] ports) {
        this.ports = ports;
        return this;
    }
}