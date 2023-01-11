package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcRouteRetryPolicy
 * The specifications for retries.
**/
public class GrpcRouteRetryPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numRetries")
    public Long numRetries;
    public GrpcRouteRetryPolicy withNumRetries(Long numRetries) {
        this.numRetries = numRetries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryConditions")
    public String[] retryConditions;
    public GrpcRouteRetryPolicy withRetryConditions(String[] retryConditions) {
        this.retryConditions = retryConditions;
        return this;
    }
}