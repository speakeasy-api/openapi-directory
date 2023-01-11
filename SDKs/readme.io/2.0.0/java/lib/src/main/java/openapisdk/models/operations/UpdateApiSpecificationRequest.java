package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApiSpecificationRequest {
    public UpdateApiSpecificationPathParams pathParams;
    public UpdateApiSpecificationRequest withPathParams(UpdateApiSpecificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateApiSpecificationRequestBody request;
    public UpdateApiSpecificationRequest withRequest(UpdateApiSpecificationRequestBody request) {
        this.request = request;
        return this;
    }
    public UpdateApiSpecificationSecurity security;
    public UpdateApiSpecificationRequest withSecurity(UpdateApiSpecificationSecurity security) {
        this.security = security;
        return this;
    }
}