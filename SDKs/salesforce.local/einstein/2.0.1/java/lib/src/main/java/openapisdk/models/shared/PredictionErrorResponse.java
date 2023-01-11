package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PredictionErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public PredictionErrorResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public PredictionErrorResponse withObject(String object) {
        this.object = object;
        return this;
    }
}