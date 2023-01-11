package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioConstructionInvestable200ApplicationJson {
    @JsonProperty("assetsPositions")
    public Double[] assetsPositions;
    public PostPortfolioConstructionInvestable200ApplicationJson withAssetsPositions(Double[] assetsPositions) {
        this.assetsPositions = assetsPositions;
        return this;
    }
    @JsonProperty("assetsWeights")
    public Double[] assetsWeights;
    public PostPortfolioConstructionInvestable200ApplicationJson withAssetsWeights(Double[] assetsWeights) {
        this.assetsWeights = assetsWeights;
        return this;
    }
}