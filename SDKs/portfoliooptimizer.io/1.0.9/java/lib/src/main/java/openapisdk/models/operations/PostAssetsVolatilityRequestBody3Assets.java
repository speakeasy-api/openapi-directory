package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVolatilityRequestBody3Assets {
    @JsonProperty("assetVariance")
    public Double assetVariance;
    public PostAssetsVolatilityRequestBody3Assets withAssetVariance(Double assetVariance) {
        this.assetVariance = assetVariance;
        return this;
    }
}