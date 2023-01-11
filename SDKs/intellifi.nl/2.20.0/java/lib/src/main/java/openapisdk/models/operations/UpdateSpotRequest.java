package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSpotRequest {
    public UpdateSpotPathParams pathParams;
    public UpdateSpotRequest withPathParams(UpdateSpotPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SpotUpdateInput request;
    public UpdateSpotRequest withRequest(openapisdk.models.shared.SpotUpdateInput request) {
        this.request = request;
        return this;
    }
}