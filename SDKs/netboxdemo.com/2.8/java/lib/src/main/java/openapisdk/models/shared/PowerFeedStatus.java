package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PowerFeedStatus {
    @JsonProperty("label")
    public PowerFeedStatusLabelEnum label;
    public PowerFeedStatus withLabel(PowerFeedStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public PowerFeedStatusValueEnum value;
    public PowerFeedStatus withValue(PowerFeedStatusValueEnum value) {
        this.value = value;
        return this;
    }
}