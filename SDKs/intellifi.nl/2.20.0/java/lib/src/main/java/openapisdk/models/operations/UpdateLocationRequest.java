package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLocationRequest {
    public UpdateLocationPathParams pathParams;
    public UpdateLocationRequest withPathParams(UpdateLocationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationInput request;
    public UpdateLocationRequest withRequest(openapisdk.models.shared.LocationInput request) {
        this.request = request;
        return this;
    }
}