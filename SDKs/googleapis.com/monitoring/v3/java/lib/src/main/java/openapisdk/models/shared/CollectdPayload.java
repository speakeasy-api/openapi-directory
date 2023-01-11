package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CollectdPayload
 * A collection of data points sent from a collectd-based plugin. See the collectd documentation for more information.
**/
public class CollectdPayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public CollectdPayload withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, TypedValue> metadata;
    public CollectdPayload withMetadata(java.util.Map<String, TypedValue> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plugin")
    public String plugin;
    public CollectdPayload withPlugin(String plugin) {
        this.plugin = plugin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pluginInstance")
    public String pluginInstance;
    public CollectdPayload withPluginInstance(String pluginInstance) {
        this.pluginInstance = pluginInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public CollectdPayload withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CollectdPayload withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("typeInstance")
    public String typeInstance;
    public CollectdPayload withTypeInstance(String typeInstance) {
        this.typeInstance = typeInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public CollectdValue[] values;
    public CollectdPayload withValues(CollectdValue[] values) {
        this.values = values;
        return this;
    }
}