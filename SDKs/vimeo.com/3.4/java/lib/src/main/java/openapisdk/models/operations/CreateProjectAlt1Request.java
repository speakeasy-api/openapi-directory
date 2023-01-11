package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectAlt1Request {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateProjectAlt1RequestBody request;
    public CreateProjectAlt1Request withRequest(CreateProjectAlt1RequestBody request) {
        this.request = request;
        return this;
    }
    public CreateProjectAlt1Security security;
    public CreateProjectAlt1Request withSecurity(CreateProjectAlt1Security security) {
        this.security = security;
        return this;
    }
}