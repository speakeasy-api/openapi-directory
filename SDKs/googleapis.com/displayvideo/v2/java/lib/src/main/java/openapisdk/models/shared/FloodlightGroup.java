package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FloodlightGroup
 * A single Floodlight group.
**/
public class FloodlightGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeViewConfig")
    public ActiveViewVideoViewabilityMetricConfig activeViewConfig;
    public FloodlightGroup withActiveViewConfig(ActiveViewVideoViewabilityMetricConfig activeViewConfig) {
        this.activeViewConfig = activeViewConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customVariables")
    public java.util.Map<String, Object> customVariables;
    public FloodlightGroup withCustomVariables(java.util.Map<String, Object> customVariables) {
        this.customVariables = customVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public FloodlightGroup withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightGroupId")
    public String floodlightGroupId;
    public FloodlightGroup withFloodlightGroupId(String floodlightGroupId) {
        this.floodlightGroupId = floodlightGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookbackWindow")
    public LookbackWindow lookbackWindow;
    public FloodlightGroup withLookbackWindow(LookbackWindow lookbackWindow) {
        this.lookbackWindow = lookbackWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FloodlightGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webTagType")
    public FloodlightGroupWebTagTypeEnum webTagType;
    public FloodlightGroup withWebTagType(FloodlightGroupWebTagTypeEnum webTagType) {
        this.webTagType = webTagType;
        return this;
    }
}