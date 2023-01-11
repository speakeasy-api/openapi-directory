package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Example19 {
    @JsonProperty("success")
    public Boolean success;
    public Example19 withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}