package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2TrafficTarget
 * Holds a single traffic routing entry for the Service. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision.
**/
public class GoogleCloudRunV2TrafficTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percent")
    public Integer percent;
    public GoogleCloudRunV2TrafficTarget withPercent(Integer percent) {
        this.percent = percent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public GoogleCloudRunV2TrafficTarget withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public GoogleCloudRunV2TrafficTarget withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudRunV2TrafficTargetTypeEnum type;
    public GoogleCloudRunV2TrafficTarget withType(GoogleCloudRunV2TrafficTargetTypeEnum type) {
        this.type = type;
        return this;
    }
}