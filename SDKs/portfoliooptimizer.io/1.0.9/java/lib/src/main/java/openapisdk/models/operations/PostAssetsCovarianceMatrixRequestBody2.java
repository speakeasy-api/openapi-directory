package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCovarianceMatrixRequestBody2 {
    @JsonProperty("assets")
    public Long assets;
    public PostAssetsCovarianceMatrixRequestBody2 withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCorrelationMatrix")
    public Double[][] assetsCorrelationMatrix;
    public PostAssetsCovarianceMatrixRequestBody2 withAssetsCorrelationMatrix(Double[][] assetsCorrelationMatrix) {
        this.assetsCorrelationMatrix = assetsCorrelationMatrix;
        return this;
    }
    @JsonProperty("assetsVariances")
    public Double[] assetsVariances;
    public PostAssetsCovarianceMatrixRequestBody2 withAssetsVariances(Double[] assetsVariances) {
        this.assetsVariances = assetsVariances;
        return this;
    }
}