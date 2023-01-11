package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LithologyDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lithology_colour")
    public String lithologyColour;
    public LithologyDescription withLithologyColour(String lithologyColour) {
        this.lithologyColour = lithologyColour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lithology_from")
    public String lithologyFrom;
    public LithologyDescription withLithologyFrom(String lithologyFrom) {
        this.lithologyFrom = lithologyFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lithology_hardness")
    public String lithologyHardness;
    public LithologyDescription withLithologyHardness(String lithologyHardness) {
        this.lithologyHardness = lithologyHardness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lithology_moisture")
    public String lithologyMoisture;
    public LithologyDescription withLithologyMoisture(String lithologyMoisture) {
        this.lithologyMoisture = lithologyMoisture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lithology_raw_data")
    public String lithologyRawData;
    public LithologyDescription withLithologyRawData(String lithologyRawData) {
        this.lithologyRawData = lithologyRawData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lithology_to")
    public String lithologyTo;
    public LithologyDescription withLithologyTo(String lithologyTo) {
        this.lithologyTo = lithologyTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("water_bearing_estimated_flow")
    public String waterBearingEstimatedFlow;
    public LithologyDescription withWaterBearingEstimatedFlow(String waterBearingEstimatedFlow) {
        this.waterBearingEstimatedFlow = waterBearingEstimatedFlow;
        return this;
    }
}