package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVolatilitySample200ApplicationJson {
    @JsonProperty("assets")
    public PostAssetsVolatilitySample200ApplicationJsonAssets[] assets;
    public PostAssetsVolatilitySample200ApplicationJson withAssets(PostAssetsVolatilitySample200ApplicationJsonAssets[] assets) {
        this.assets = assets;
        return this;
    }
}