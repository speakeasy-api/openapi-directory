package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVarianceRequestBody3Assets {
    @JsonProperty("assetVolatility")
    public Double assetVolatility;
    public PostAssetsVarianceRequestBody3Assets withAssetVolatility(Double assetVolatility) {
        this.assetVolatility = assetVolatility;
        return this;
    }
}