package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddSpotSetRequest {
    public AddSpotSetPathParams pathParams;
    public AddSpotSetRequest withPathParams(AddSpotSetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SpotSetCreateInput request;
    public AddSpotSetRequest withRequest(openapisdk.models.shared.SpotSetCreateInput request) {
        this.request = request;
        return this;
    }
}