package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVolatility200ApplicationJsonAssets {
    @JsonProperty("assetVolatility")
    public Double assetVolatility;
    public PostAssetsVolatility200ApplicationJsonAssets withAssetVolatility(Double assetVolatility) {
        this.assetVolatility = assetVolatility;
        return this;
    }
}