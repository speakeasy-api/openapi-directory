package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioSimulationRebalancingDriftWeightRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioSimulationRebalancingDriftWeightRequestBody request;
    public PostPortfolioSimulationRebalancingDriftWeightRequest withRequest(PostPortfolioSimulationRebalancingDriftWeightRequestBody request) {
        this.request = request;
        return this;
    }
}