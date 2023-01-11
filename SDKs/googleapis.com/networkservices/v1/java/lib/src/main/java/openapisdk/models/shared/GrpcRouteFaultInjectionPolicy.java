package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcRouteFaultInjectionPolicy
 * The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests.
**/
public class GrpcRouteFaultInjectionPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abort")
    public GrpcRouteFaultInjectionPolicyAbort abort;
    public GrpcRouteFaultInjectionPolicy withAbort(GrpcRouteFaultInjectionPolicyAbort abort) {
        this.abort = abort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delay")
    public GrpcRouteFaultInjectionPolicyDelay delay;
    public GrpcRouteFaultInjectionPolicy withDelay(GrpcRouteFaultInjectionPolicyDelay delay) {
        this.delay = delay;
        return this;
    }
}