package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LoadServiceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LoadServiceRequestBody request;
    public LoadServiceRequest withRequest(LoadServiceRequestBody request) {
        this.request = request;
        return this;
    }
}