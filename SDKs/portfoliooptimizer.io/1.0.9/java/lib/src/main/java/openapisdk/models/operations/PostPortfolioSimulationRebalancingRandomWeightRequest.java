package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioSimulationRebalancingRandomWeightRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioSimulationRebalancingRandomWeightRequestBody request;
    public PostPortfolioSimulationRebalancingRandomWeightRequest withRequest(PostPortfolioSimulationRebalancingRandomWeightRequestBody request) {
        this.request = request;
        return this;
    }
}