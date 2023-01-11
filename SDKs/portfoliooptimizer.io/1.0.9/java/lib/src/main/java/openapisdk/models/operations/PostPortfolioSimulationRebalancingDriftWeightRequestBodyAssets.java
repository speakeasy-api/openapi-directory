package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets {
    @JsonProperty("assetPrices")
    public Double[] assetPrices;
    public PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets withAssetPrices(Double[] assetPrices) {
        this.assetPrices = assetPrices;
        return this;
    }
}