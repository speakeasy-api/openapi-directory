package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVolatilitySample200ApplicationJsonAssets {
    @JsonProperty("assetVolatility")
    public Double assetVolatility;
    public PostAssetsVolatilitySample200ApplicationJsonAssets withAssetVolatility(Double assetVolatility) {
        this.assetVolatility = assetVolatility;
        return this;
    }
}