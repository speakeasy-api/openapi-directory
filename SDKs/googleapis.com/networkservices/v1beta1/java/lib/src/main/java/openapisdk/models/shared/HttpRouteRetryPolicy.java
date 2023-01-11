package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteRetryPolicy
 * The specifications for retries.
**/
public class HttpRouteRetryPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numRetries")
    public Integer numRetries;
    public HttpRouteRetryPolicy withNumRetries(Integer numRetries) {
        this.numRetries = numRetries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perTryTimeout")
    public String perTryTimeout;
    public HttpRouteRetryPolicy withPerTryTimeout(String perTryTimeout) {
        this.perTryTimeout = perTryTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryConditions")
    public String[] retryConditions;
    public HttpRouteRetryPolicy withRetryConditions(String[] retryConditions) {
        this.retryConditions = retryConditions;
        return this;
    }
}