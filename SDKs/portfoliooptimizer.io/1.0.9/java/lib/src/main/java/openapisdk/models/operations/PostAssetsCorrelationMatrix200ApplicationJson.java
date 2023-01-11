package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCorrelationMatrix200ApplicationJson {
    @JsonProperty("assetsCorrelationMatrix")
    public Double[][] assetsCorrelationMatrix;
    public PostAssetsCorrelationMatrix200ApplicationJson withAssetsCorrelationMatrix(Double[][] assetsCorrelationMatrix) {
        this.assetsCorrelationMatrix = assetsCorrelationMatrix;
        return this;
    }
}