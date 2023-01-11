package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateADatabaseRequest {
    public UpdateADatabasePathParams pathParams;
    public UpdateADatabaseRequest withPathParams(UpdateADatabasePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateADatabaseRequestBody request;
    public UpdateADatabaseRequest withRequest(UpdateADatabaseRequestBody request) {
        this.request = request;
        return this;
    }
}