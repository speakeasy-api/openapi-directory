package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCovarianceMatrixRequestBody3 {
    @JsonProperty("assets")
    public Long assets;
    public PostAssetsCovarianceMatrixRequestBody3 withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCorrelationMatrix")
    public Double[][] assetsCorrelationMatrix;
    public PostAssetsCovarianceMatrixRequestBody3 withAssetsCorrelationMatrix(Double[][] assetsCorrelationMatrix) {
        this.assetsCorrelationMatrix = assetsCorrelationMatrix;
        return this;
    }
    @JsonProperty("assetsVolatilities")
    public Double[] assetsVolatilities;
    public PostAssetsCovarianceMatrixRequestBody3 withAssetsVolatilities(Double[] assetsVolatilities) {
        this.assetsVolatilities = assetsVolatilities;
        return this;
    }
}