package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Environment
 * Message containing environment configuration for a Lighthouse run.
**/
public class Environment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benchmarkIndex")
    public Double benchmarkIndex;
    public Environment withBenchmarkIndex(Double benchmarkIndex) {
        this.benchmarkIndex = benchmarkIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostUserAgent")
    public String hostUserAgent;
    public Environment withHostUserAgent(String hostUserAgent) {
        this.hostUserAgent = hostUserAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkUserAgent")
    public String networkUserAgent;
    public Environment withNetworkUserAgent(String networkUserAgent) {
        this.networkUserAgent = networkUserAgent;
        return this;
    }
}