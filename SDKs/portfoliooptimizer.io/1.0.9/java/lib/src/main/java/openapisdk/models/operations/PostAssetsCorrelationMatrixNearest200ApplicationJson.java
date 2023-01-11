package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCorrelationMatrixNearest200ApplicationJson {
    @JsonProperty("assetsCorrelationMatrix")
    public Double[][] assetsCorrelationMatrix;
    public PostAssetsCorrelationMatrixNearest200ApplicationJson withAssetsCorrelationMatrix(Double[][] assetsCorrelationMatrix) {
        this.assetsCorrelationMatrix = assetsCorrelationMatrix;
        return this;
    }
}