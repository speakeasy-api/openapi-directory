package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCorrelationMatrixShrinkageRequestBody2 {
    @JsonProperty("assets")
    public Long assets;
    public PostAssetsCorrelationMatrixShrinkageRequestBody2 withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCorrelationMatrix")
    public Double[][] assetsCorrelationMatrix;
    public PostAssetsCorrelationMatrixShrinkageRequestBody2 withAssetsCorrelationMatrix(Double[][] assetsCorrelationMatrix) {
        this.assetsCorrelationMatrix = assetsCorrelationMatrix;
        return this;
    }
    @JsonProperty("shrinkageFactor")
    public Double shrinkageFactor;
    public PostAssetsCorrelationMatrixShrinkageRequestBody2 withShrinkageFactor(Double shrinkageFactor) {
        this.shrinkageFactor = shrinkageFactor;
        return this;
    }
    @JsonProperty("shrinkageTargetCorrelationMatrix")
    public Double[][] shrinkageTargetCorrelationMatrix;
    public PostAssetsCorrelationMatrixShrinkageRequestBody2 withShrinkageTargetCorrelationMatrix(Double[][] shrinkageTargetCorrelationMatrix) {
        this.shrinkageTargetCorrelationMatrix = shrinkageTargetCorrelationMatrix;
        return this;
    }
}