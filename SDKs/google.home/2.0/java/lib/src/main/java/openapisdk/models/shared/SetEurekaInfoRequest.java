package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetEurekaInfoRequest {
    @JsonProperty("name")
    public String name;
    public SetEurekaInfoRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("opt_in")
    public OptIn1 optIn;
    public SetEurekaInfoRequest withOptIn(OptIn1 optIn) {
        this.optIn = optIn;
        return this;
    }
    @JsonProperty("settings")
    public Settings1 settings;
    public SetEurekaInfoRequest withSettings(Settings1 settings) {
        this.settings = settings;
        return this;
    }
}