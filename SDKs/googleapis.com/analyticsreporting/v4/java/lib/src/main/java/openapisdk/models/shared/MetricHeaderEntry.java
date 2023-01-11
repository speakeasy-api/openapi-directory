package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricHeaderEntry
 * Header for the metrics.
**/
public class MetricHeaderEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MetricHeaderEntry withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MetricHeaderEntryTypeEnum type;
    public MetricHeaderEntry withType(MetricHeaderEntryTypeEnum type) {
        this.type = type;
        return this;
    }
}