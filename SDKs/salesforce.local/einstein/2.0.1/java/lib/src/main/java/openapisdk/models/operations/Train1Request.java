package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Train1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Train1RequestBody request;
    public Train1Request withRequest(Train1RequestBody request) {
        this.request = request;
        return this;
    }
    public Train1Security security;
    public Train1Request withSecurity(Train1Security security) {
        this.security = security;
        return this;
    }
}