package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCorrelationMatrixValidation200ApplicationJson {
    @JsonProperty("message")
    public PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum message;
    public PostAssetsCorrelationMatrixValidation200ApplicationJson withMessage(PostAssetsCorrelationMatrixValidation200ApplicationJsonMessageEnum message) {
        this.message = message;
        return this;
    }
}