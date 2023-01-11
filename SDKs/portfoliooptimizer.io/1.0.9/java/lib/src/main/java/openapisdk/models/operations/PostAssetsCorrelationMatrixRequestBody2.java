package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCorrelationMatrixRequestBody2 {
    @JsonProperty("assets")
    public Long assets;
    public PostAssetsCorrelationMatrixRequestBody2 withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCovarianceMatrix")
    public Double[][] assetsCovarianceMatrix;
    public PostAssetsCorrelationMatrixRequestBody2 withAssetsCovarianceMatrix(Double[][] assetsCovarianceMatrix) {
        this.assetsCovarianceMatrix = assetsCovarianceMatrix;
        return this;
    }
}