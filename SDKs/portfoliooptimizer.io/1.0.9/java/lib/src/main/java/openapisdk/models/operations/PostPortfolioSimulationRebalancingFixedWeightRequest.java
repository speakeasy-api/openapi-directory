package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioSimulationRebalancingFixedWeightRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioSimulationRebalancingFixedWeightRequestBody request;
    public PostPortfolioSimulationRebalancingFixedWeightRequest withRequest(PostPortfolioSimulationRebalancingFixedWeightRequestBody request) {
        this.request = request;
        return this;
    }
}