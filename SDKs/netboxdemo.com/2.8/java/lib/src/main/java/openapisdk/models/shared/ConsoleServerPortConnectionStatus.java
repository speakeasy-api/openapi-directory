package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsoleServerPortConnectionStatus {
    @JsonProperty("label")
    public ConsoleServerPortConnectionStatusLabelEnum label;
    public ConsoleServerPortConnectionStatus withLabel(ConsoleServerPortConnectionStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Boolean value;
    public ConsoleServerPortConnectionStatus withValue(Boolean value) {
        this.value = value;
        return this;
    }
}