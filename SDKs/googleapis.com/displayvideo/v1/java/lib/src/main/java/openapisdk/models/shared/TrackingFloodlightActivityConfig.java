package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackingFloodlightActivityConfig
 * Settings that control the behavior of a single Floodlight activity config.
**/
public class TrackingFloodlightActivityConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityId")
    public String floodlightActivityId;
    public TrackingFloodlightActivityConfig withFloodlightActivityId(String floodlightActivityId) {
        this.floodlightActivityId = floodlightActivityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postClickLookbackWindowDays")
    public Integer postClickLookbackWindowDays;
    public TrackingFloodlightActivityConfig withPostClickLookbackWindowDays(Integer postClickLookbackWindowDays) {
        this.postClickLookbackWindowDays = postClickLookbackWindowDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postViewLookbackWindowDays")
    public Integer postViewLookbackWindowDays;
    public TrackingFloodlightActivityConfig withPostViewLookbackWindowDays(Integer postViewLookbackWindowDays) {
        this.postViewLookbackWindowDays = postViewLookbackWindowDays;
        return this;
    }
}