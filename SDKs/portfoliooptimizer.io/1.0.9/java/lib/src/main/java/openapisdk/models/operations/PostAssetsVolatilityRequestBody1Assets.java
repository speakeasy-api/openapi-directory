package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVolatilityRequestBody1Assets {
    @JsonProperty("assetReturns")
    public Double[] assetReturns;
    public PostAssetsVolatilityRequestBody1Assets withAssetReturns(Double[] assetReturns) {
        this.assetReturns = assetReturns;
        return this;
    }
}