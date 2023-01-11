package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutImagesId200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public PutImagesId200ApplicationJsonImage image;
    public PutImagesId200ApplicationJson withImage(PutImagesId200ApplicationJsonImage image) {
        this.image = image;
        return this;
    }
}