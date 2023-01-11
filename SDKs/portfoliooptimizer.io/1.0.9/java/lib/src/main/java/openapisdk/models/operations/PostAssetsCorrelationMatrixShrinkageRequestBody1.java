package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCorrelationMatrixShrinkageRequestBody1 {
    @JsonProperty("assets")
    public Long assets;
    public PostAssetsCorrelationMatrixShrinkageRequestBody1 withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCorrelationMatrix")
    public Double[][] assetsCorrelationMatrix;
    public PostAssetsCorrelationMatrixShrinkageRequestBody1 withAssetsCorrelationMatrix(Double[][] assetsCorrelationMatrix) {
        this.assetsCorrelationMatrix = assetsCorrelationMatrix;
        return this;
    }
    @JsonProperty("shrinkageFactor")
    public Double shrinkageFactor;
    public PostAssetsCorrelationMatrixShrinkageRequestBody1 withShrinkageFactor(Double shrinkageFactor) {
        this.shrinkageFactor = shrinkageFactor;
        return this;
    }
    @JsonProperty("shrinkageTarget")
    public PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum shrinkageTarget;
    public PostAssetsCorrelationMatrixShrinkageRequestBody1 withShrinkageTarget(PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum shrinkageTarget) {
        this.shrinkageTarget = shrinkageTarget;
        return this;
    }
}