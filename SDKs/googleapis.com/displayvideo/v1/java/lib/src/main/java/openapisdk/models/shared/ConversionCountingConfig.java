package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConversionCountingConfig
 * Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting.
**/
public class ConversionCountingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityConfigs")
    public TrackingFloodlightActivityConfig[] floodlightActivityConfigs;
    public ConversionCountingConfig withFloodlightActivityConfigs(TrackingFloodlightActivityConfig[] floodlightActivityConfigs) {
        this.floodlightActivityConfigs = floodlightActivityConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postViewCountPercentageMillis")
    public String postViewCountPercentageMillis;
    public ConversionCountingConfig withPostViewCountPercentageMillis(String postViewCountPercentageMillis) {
        this.postViewCountPercentageMillis = postViewCountPercentageMillis;
        return this;
    }
}