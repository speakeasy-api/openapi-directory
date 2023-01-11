package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StatsdConfig
 * The configuration for statsd metrics push
**/
public class StatsdConfig {
    @JsonProperty("datadog")
    public Boolean datadog;
    public StatsdConfig withDatadog(Boolean datadog) {
        this.datadog = datadog;
        return this;
    }
    @JsonProperty("host")
    public String host;
    public StatsdConfig withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonProperty("port")
    public Integer port;
    public StatsdConfig withPort(Integer port) {
        this.port = port;
        return this;
    }
}