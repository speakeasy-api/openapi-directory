package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVolatilitySampleRequestBodyAssets {
    @JsonProperty("assetReturns")
    public Double[] assetReturns;
    public PostAssetsVolatilitySampleRequestBodyAssets withAssetReturns(Double[] assetReturns) {
        this.assetReturns = assetReturns;
        return this;
    }
}