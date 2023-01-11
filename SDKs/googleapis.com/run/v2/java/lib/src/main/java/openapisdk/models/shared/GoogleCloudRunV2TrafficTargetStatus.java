package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2TrafficTargetStatus
 * Represents the observed state of a single `TrafficTarget` entry.
**/
public class GoogleCloudRunV2TrafficTargetStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percent")
    public Integer percent;
    public GoogleCloudRunV2TrafficTargetStatus withPercent(Integer percent) {
        this.percent = percent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public GoogleCloudRunV2TrafficTargetStatus withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public GoogleCloudRunV2TrafficTargetStatus withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudRunV2TrafficTargetStatusTypeEnum type;
    public GoogleCloudRunV2TrafficTargetStatus withType(GoogleCloudRunV2TrafficTargetStatusTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleCloudRunV2TrafficTargetStatus withUri(String uri) {
        this.uri = uri;
        return this;
    }
}