package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImagesId200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public GetImagesId200ApplicationJsonImage image;
    public GetImagesId200ApplicationJson withImage(GetImagesId200ApplicationJsonImage image) {
        this.image = image;
        return this;
    }
}