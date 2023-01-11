package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectRequest {
    public CreateProjectPathParams pathParams;
    public CreateProjectRequest withPathParams(CreateProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateProjectRequestBody request;
    public CreateProjectRequest withRequest(CreateProjectRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateProjectSecurity security;
    public CreateProjectRequest withSecurity(CreateProjectSecurity security) {
        this.security = security;
        return this;
    }
}