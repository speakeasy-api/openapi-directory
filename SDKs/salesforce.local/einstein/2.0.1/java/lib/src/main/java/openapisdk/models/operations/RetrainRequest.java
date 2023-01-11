package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrainRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public RetrainRequestBody request;
    public RetrainRequest withRequest(RetrainRequestBody request) {
        this.request = request;
        return this;
    }
    public RetrainSecurity security;
    public RetrainRequest withSecurity(RetrainSecurity security) {
        this.security = security;
        return this;
    }
}