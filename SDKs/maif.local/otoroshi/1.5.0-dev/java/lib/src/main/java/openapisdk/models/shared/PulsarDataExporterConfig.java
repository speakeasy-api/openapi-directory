package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PulsarDataExporterConfig
 * The configuration for kafka access
**/
public class PulsarDataExporterConfig {
    @JsonProperty("namespace")
    public String namespace;
    public PulsarDataExporterConfig withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    @JsonProperty("tenant")
    public String tenant;
    public PulsarDataExporterConfig withTenant(String tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonProperty("topic")
    public String topic;
    public PulsarDataExporterConfig withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonProperty("uri")
    public String[] uri;
    public PulsarDataExporterConfig withUri(String[] uri) {
        this.uri = uri;
        return this;
    }
}