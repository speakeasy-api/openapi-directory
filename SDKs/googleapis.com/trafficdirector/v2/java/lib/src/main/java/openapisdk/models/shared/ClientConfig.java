package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientConfig
 * All xds configs for a particular client.
**/
public class ClientConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node")
    public Node node;
    public ClientConfig withNode(Node node) {
        this.node = node;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xdsConfig")
    public PerXdsConfig[] xdsConfig;
    public ClientConfig withXdsConfig(PerXdsConfig[] xdsConfig) {
        this.xdsConfig = xdsConfig;
        return this;
    }
}