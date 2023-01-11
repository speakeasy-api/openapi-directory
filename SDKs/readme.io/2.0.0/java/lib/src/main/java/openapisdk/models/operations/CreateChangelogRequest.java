package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChangelogRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Changelog request;
    public CreateChangelogRequest withRequest(openapisdk.models.shared.Changelog request) {
        this.request = request;
        return this;
    }
    public CreateChangelogSecurity security;
    public CreateChangelogRequest withSecurity(CreateChangelogSecurity security) {
        this.security = security;
        return this;
    }
}