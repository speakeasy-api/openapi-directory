package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WaterUse {
    @JsonProperty("code")
    public String code;
    public WaterUse withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public WaterUse withDescription(String description) {
        this.description = description;
        return this;
    }
}