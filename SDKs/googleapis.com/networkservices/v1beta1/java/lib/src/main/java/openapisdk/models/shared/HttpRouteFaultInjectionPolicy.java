package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteFaultInjectionPolicy
 * The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced by client proxy on a percentage of requests before sending those requests to the destination service. Similarly requests can be aborted by client proxy for a percentage of requests.
**/
public class HttpRouteFaultInjectionPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abort")
    public HttpRouteFaultInjectionPolicyAbort abort;
    public HttpRouteFaultInjectionPolicy withAbort(HttpRouteFaultInjectionPolicyAbort abort) {
        this.abort = abort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delay")
    public HttpRouteFaultInjectionPolicyDelay delay;
    public HttpRouteFaultInjectionPolicy withDelay(HttpRouteFaultInjectionPolicyDelay delay) {
        this.delay = delay;
        return this;
    }
}