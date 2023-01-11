package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Proxy {
    @JsonProperty("mode")
    public String mode;
    public Proxy withMode(String mode) {
        this.mode = mode;
        return this;
    }
}