package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteFaultInjectionPolicyAbort
 * Specification of how client requests are aborted as part of fault injection before being sent to a destination.
**/
public class HttpRouteFaultInjectionPolicyAbort {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpStatus")
    public Integer httpStatus;
    public HttpRouteFaultInjectionPolicyAbort withHttpStatus(Integer httpStatus) {
        this.httpStatus = httpStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Integer percentage;
    public HttpRouteFaultInjectionPolicyAbort withPercentage(Integer percentage) {
        this.percentage = percentage;
        return this;
    }
}