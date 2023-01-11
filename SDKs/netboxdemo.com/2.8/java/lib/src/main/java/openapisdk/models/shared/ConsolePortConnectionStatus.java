package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsolePortConnectionStatus {
    @JsonProperty("label")
    public ConsolePortConnectionStatusLabelEnum label;
    public ConsolePortConnectionStatus withLabel(ConsolePortConnectionStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Boolean value;
    public ConsolePortConnectionStatus withValue(Boolean value) {
        this.value = value;
        return this;
    }
}