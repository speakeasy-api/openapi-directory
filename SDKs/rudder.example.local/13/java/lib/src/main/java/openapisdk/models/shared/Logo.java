package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Logo {
    @JsonProperty("enable")
    public Boolean enable;
    public Logo withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
}