package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubAccountRequest {
    public CreateSubAccountPathParams pathParams;
    public CreateSubAccountRequest withPathParams(CreateSubAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NewSubaccountRequest request;
    public CreateSubAccountRequest withRequest(openapisdk.models.shared.NewSubaccountRequest request) {
        this.request = request;
        return this;
    }
    public CreateSubAccountSecurity security;
    public CreateSubAccountRequest withSecurity(CreateSubAccountSecurity security) {
        this.security = security;
        return this;
    }
}