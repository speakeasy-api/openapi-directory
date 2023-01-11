package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrafficTargetInput
 * TrafficTarget holds a single entry of the routing table for a Route.
**/
public class TrafficTargetInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationName")
    public String configurationName;
    public TrafficTargetInput withConfigurationName(String configurationName) {
        this.configurationName = configurationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestRevision")
    public Boolean latestRevision;
    public TrafficTargetInput withLatestRevision(Boolean latestRevision) {
        this.latestRevision = latestRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percent")
    public Integer percent;
    public TrafficTargetInput withPercent(Integer percent) {
        this.percent = percent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionName")
    public String revisionName;
    public TrafficTargetInput withRevisionName(String revisionName) {
        this.revisionName = revisionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public TrafficTargetInput withTag(String tag) {
        this.tag = tag;
        return this;
    }
}