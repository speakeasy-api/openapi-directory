package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCovarianceMatrixSampleRequestBody {
    @JsonProperty("assets")
    public PostAssetsCovarianceMatrixSampleRequestBodyAssets[] assets;
    public PostAssetsCovarianceMatrixSampleRequestBody withAssets(PostAssetsCovarianceMatrixSampleRequestBodyAssets[] assets) {
        this.assets = assets;
        return this;
    }
}