package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDataSourceRequest {
    public UpdateDataSourcePathParams pathParams;
    public UpdateDataSourceRequest withPathParams(UpdateDataSourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Datasource request;
    public UpdateDataSourceRequest withRequest(openapisdk.models.shared.Datasource request) {
        this.request = request;
        return this;
    }
}