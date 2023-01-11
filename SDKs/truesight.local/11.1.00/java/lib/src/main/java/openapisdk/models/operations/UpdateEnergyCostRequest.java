package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnergyCostRequest {
    public UpdateEnergyCostPathParams pathParams;
    public UpdateEnergyCostRequest withPathParams(UpdateEnergyCostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupConfiguration request;
    public UpdateEnergyCostRequest withRequest(openapisdk.models.shared.GroupConfiguration request) {
        this.request = request;
        return this;
    }
}