package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVolatility200ApplicationJson {
    @JsonProperty("assets")
    public PostAssetsVolatility200ApplicationJsonAssets[] assets;
    public PostAssetsVolatility200ApplicationJson withAssets(PostAssetsVolatility200ApplicationJsonAssets[] assets) {
        this.assets = assets;
        return this;
    }
}