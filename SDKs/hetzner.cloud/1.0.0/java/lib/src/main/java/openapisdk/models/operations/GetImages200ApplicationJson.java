package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImages200ApplicationJson {
    @JsonProperty("images")
    public GetImages200ApplicationJsonImages[] images;
    public GetImages200ApplicationJson withImages(GetImages200ApplicationJsonImages[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetImages200ApplicationJsonMeta meta;
    public GetImages200ApplicationJson withMeta(GetImages200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}