package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVersionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Version request;
    public CreateVersionRequest withRequest(openapisdk.models.shared.Version request) {
        this.request = request;
        return this;
    }
    public CreateVersionSecurity security;
    public CreateVersionRequest withSecurity(CreateVersionSecurity security) {
        this.security = security;
        return this;
    }
}