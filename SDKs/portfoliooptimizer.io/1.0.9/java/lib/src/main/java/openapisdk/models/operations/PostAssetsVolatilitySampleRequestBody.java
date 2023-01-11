package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVolatilitySampleRequestBody {
    @JsonProperty("assets")
    public PostAssetsVolatilitySampleRequestBodyAssets[] assets;
    public PostAssetsVolatilitySampleRequestBody withAssets(PostAssetsVolatilitySampleRequestBodyAssets[] assets) {
        this.assets = assets;
        return this;
    }
}