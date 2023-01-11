package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCovarianceMatrixValidation200ApplicationJson {
    @JsonProperty("message")
    public PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum message;
    public PostAssetsCovarianceMatrixValidation200ApplicationJson withMessage(PostAssetsCovarianceMatrixValidation200ApplicationJsonMessageEnum message) {
        this.message = message;
        return this;
    }
}