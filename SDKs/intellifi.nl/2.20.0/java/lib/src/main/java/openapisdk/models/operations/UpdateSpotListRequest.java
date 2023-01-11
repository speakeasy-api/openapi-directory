package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSpotListRequest {
    public UpdateSpotListPathParams pathParams;
    public UpdateSpotListRequest withPathParams(UpdateSpotListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SpotListInput request;
    public UpdateSpotListRequest withRequest(openapisdk.models.shared.SpotListInput request) {
        this.request = request;
        return this;
    }
}