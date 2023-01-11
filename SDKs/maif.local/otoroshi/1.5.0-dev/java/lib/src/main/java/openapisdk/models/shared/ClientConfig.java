package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ClientConfig
 * The configuration of the circuit breaker for a service descriptor
**/
public class ClientConfig {
    @JsonProperty("backoffFactor")
    public Integer backoffFactor;
    public ClientConfig withBackoffFactor(Integer backoffFactor) {
        this.backoffFactor = backoffFactor;
        return this;
    }
    @JsonProperty("callTimeout")
    public Integer callTimeout;
    public ClientConfig withCallTimeout(Integer callTimeout) {
        this.callTimeout = callTimeout;
        return this;
    }
    @JsonProperty("globalTimeout")
    public Integer globalTimeout;
    public ClientConfig withGlobalTimeout(Integer globalTimeout) {
        this.globalTimeout = globalTimeout;
        return this;
    }
    @JsonProperty("maxErrors")
    public Integer maxErrors;
    public ClientConfig withMaxErrors(Integer maxErrors) {
        this.maxErrors = maxErrors;
        return this;
    }
    @JsonProperty("retries")
    public Integer retries;
    public ClientConfig withRetries(Integer retries) {
        this.retries = retries;
        return this;
    }
    @JsonProperty("retryInitialDelay")
    public Integer retryInitialDelay;
    public ClientConfig withRetryInitialDelay(Integer retryInitialDelay) {
        this.retryInitialDelay = retryInitialDelay;
        return this;
    }
    @JsonProperty("sampleInterval")
    public Integer sampleInterval;
    public ClientConfig withSampleInterval(Integer sampleInterval) {
        this.sampleInterval = sampleInterval;
        return this;
    }
    @JsonProperty("useCircuitBreaker")
    public Boolean useCircuitBreaker;
    public ClientConfig withUseCircuitBreaker(Boolean useCircuitBreaker) {
        this.useCircuitBreaker = useCircuitBreaker;
        return this;
    }
}