package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateDistributionLinksRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDistributionLinks request;
    public GenerateDistributionLinksRequest withRequest(openapisdk.models.shared.CreateDistributionLinks request) {
        this.request = request;
        return this;
    }
}