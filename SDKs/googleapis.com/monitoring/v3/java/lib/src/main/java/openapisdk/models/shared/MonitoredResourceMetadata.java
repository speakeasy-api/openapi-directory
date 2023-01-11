package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MonitoredResourceMetadata
 * Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message.
**/
public class MonitoredResourceMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systemLabels")
    public java.util.Map<String, Object> systemLabels;
    public MonitoredResourceMetadata withSystemLabels(java.util.Map<String, Object> systemLabels) {
        this.systemLabels = systemLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLabels")
    public java.util.Map<String, String> userLabels;
    public MonitoredResourceMetadata withUserLabels(java.util.Map<String, String> userLabels) {
        this.userLabels = userLabels;
        return this;
    }
}