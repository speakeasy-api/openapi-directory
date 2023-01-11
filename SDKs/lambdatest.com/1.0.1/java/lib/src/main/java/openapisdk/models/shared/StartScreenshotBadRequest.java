package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartScreenshotBadRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public StartScreenshotBadRequest withMessage(String message) {
        this.message = message;
        return this;
    }
}