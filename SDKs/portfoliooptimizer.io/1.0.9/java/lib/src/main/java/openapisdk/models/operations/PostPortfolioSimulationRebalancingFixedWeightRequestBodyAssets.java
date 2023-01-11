package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets {
    @JsonProperty("assetPrices")
    public Double[] assetPrices;
    public PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets withAssetPrices(Double[] assetPrices) {
        this.assetPrices = assetPrices;
        return this;
    }
}