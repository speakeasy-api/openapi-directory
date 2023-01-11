package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets {
    @JsonProperty("assetPrices")
    public Double[] assetPrices;
    public PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets withAssetPrices(Double[] assetPrices) {
        this.assetPrices = assetPrices;
        return this;
    }
}