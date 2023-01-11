package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDataSourceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Datasource request;
    public CreateDataSourceRequest withRequest(openapisdk.models.shared.Datasource request) {
        this.request = request;
        return this;
    }
}