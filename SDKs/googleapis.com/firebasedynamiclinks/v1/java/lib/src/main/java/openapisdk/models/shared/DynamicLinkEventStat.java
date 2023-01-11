package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamicLinkEventStat
 * Dynamic Link event stat.
**/
public class DynamicLinkEventStat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public DynamicLinkEventStat withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public DynamicLinkEventStatEventEnum event;
    public DynamicLinkEventStat withEvent(DynamicLinkEventStatEventEnum event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public DynamicLinkEventStatPlatformEnum platform;
    public DynamicLinkEventStat withPlatform(DynamicLinkEventStatPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
}