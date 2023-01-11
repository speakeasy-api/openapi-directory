package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVolatilityRequestBody1 {
    @JsonProperty("assets")
    public PostAssetsVolatilityRequestBody1Assets[] assets;
    public PostAssetsVolatilityRequestBody1 withAssets(PostAssetsVolatilityRequestBody1Assets[] assets) {
        this.assets = assets;
        return this;
    }
}