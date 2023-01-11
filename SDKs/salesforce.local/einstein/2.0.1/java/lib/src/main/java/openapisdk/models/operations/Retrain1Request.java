package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Retrain1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Retrain1RequestBody request;
    public Retrain1Request withRequest(Retrain1RequestBody request) {
        this.request = request;
        return this;
    }
    public Retrain1Security security;
    public Retrain1Request withSecurity(Retrain1Security security) {
        this.security = security;
        return this;
    }
}