package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePayorLinksRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePayorLinkRequest request;
    public CreatePayorLinksRequest withRequest(openapisdk.models.shared.CreatePayorLinkRequest request) {
        this.request = request;
        return this;
    }
    public CreatePayorLinksSecurity security;
    public CreatePayorLinksRequest withSecurity(CreatePayorLinksSecurity security) {
        this.security = security;
        return this;
    }
}