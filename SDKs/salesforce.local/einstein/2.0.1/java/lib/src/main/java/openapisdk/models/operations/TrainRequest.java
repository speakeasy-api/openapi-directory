package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrainRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public TrainRequestBody request;
    public TrainRequest withRequest(TrainRequestBody request) {
        this.request = request;
        return this;
    }
    public TrainSecurity security;
    public TrainRequest withSecurity(TrainSecurity security) {
        this.security = security;
        return this;
    }
}