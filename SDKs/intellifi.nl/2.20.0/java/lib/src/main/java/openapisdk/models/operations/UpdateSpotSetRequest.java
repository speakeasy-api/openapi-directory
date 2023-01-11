package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSpotSetRequest {
    public UpdateSpotSetPathParams pathParams;
    public UpdateSpotSetRequest withPathParams(UpdateSpotSetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SpotSetUpdate request;
    public UpdateSpotSetRequest withRequest(openapisdk.models.shared.SpotSetUpdate request) {
        this.request = request;
        return this;
    }
}