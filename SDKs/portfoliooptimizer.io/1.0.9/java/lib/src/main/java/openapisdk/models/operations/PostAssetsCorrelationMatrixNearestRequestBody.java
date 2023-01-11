package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAssetsCorrelationMatrixNearestRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostAssetsCorrelationMatrixNearestRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsApproximateCorrelationMatrix")
    public Double[][] assetsApproximateCorrelationMatrix;
    public PostAssetsCorrelationMatrixNearestRequestBody withAssetsApproximateCorrelationMatrix(Double[][] assetsApproximateCorrelationMatrix) {
        this.assetsApproximateCorrelationMatrix = assetsApproximateCorrelationMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsFixedCorrelations")
    public Long[][] assetsFixedCorrelations;
    public PostAssetsCorrelationMatrixNearestRequestBody withAssetsFixedCorrelations(Long[][] assetsFixedCorrelations) {
        this.assetsFixedCorrelations = assetsFixedCorrelations;
        return this;
    }
}