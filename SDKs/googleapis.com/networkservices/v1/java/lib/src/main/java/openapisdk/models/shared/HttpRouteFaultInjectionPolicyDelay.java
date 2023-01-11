package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteFaultInjectionPolicyDelay
 * Specification of how client requests are delayed as part of fault injection before being sent to a destination.
**/
public class HttpRouteFaultInjectionPolicyDelay {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedDelay")
    public String fixedDelay;
    public HttpRouteFaultInjectionPolicyDelay withFixedDelay(String fixedDelay) {
        this.fixedDelay = fixedDelay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Integer percentage;
    public HttpRouteFaultInjectionPolicyDelay withPercentage(Integer percentage) {
        this.percentage = percentage;
        return this;
    }
}