package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrafficTarget
 * TrafficTarget holds a single entry of the routing table for a Route.
**/
public class TrafficTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationName")
    public String configurationName;
    public TrafficTarget withConfigurationName(String configurationName) {
        this.configurationName = configurationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestRevision")
    public Boolean latestRevision;
    public TrafficTarget withLatestRevision(Boolean latestRevision) {
        this.latestRevision = latestRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percent")
    public Integer percent;
    public TrafficTarget withPercent(Integer percent) {
        this.percent = percent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionName")
    public String revisionName;
    public TrafficTarget withRevisionName(String revisionName) {
        this.revisionName = revisionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public TrafficTarget withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TrafficTarget withUrl(String url) {
        this.url = url;
        return this;
    }
}