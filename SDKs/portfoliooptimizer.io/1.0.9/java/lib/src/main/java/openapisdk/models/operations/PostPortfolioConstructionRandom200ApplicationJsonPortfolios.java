package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioConstructionRandom200ApplicationJsonPortfolios {
    @JsonProperty("assetsWeights")
    public Double[] assetsWeights;
    public PostPortfolioConstructionRandom200ApplicationJsonPortfolios withAssetsWeights(Double[] assetsWeights) {
        this.assetsWeights = assetsWeights;
        return this;
    }
}