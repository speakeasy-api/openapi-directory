package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCovarianceMatrixRequestBody1 {
    @JsonProperty("assets")
    public PostAssetsCovarianceMatrixRequestBody1Assets[] assets;
    public PostAssetsCovarianceMatrixRequestBody1 withAssets(PostAssetsCovarianceMatrixRequestBody1Assets[] assets) {
        this.assets = assets;
        return this;
    }
}