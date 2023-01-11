package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCertRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Certificate request;
    public CreateCertRequest withRequest(openapisdk.models.shared.Certificate request) {
        this.request = request;
        return this;
    }
    public CreateCertSecurity security;
    public CreateCertRequest withSecurity(CreateCertSecurity security) {
        this.security = security;
        return this;
    }
}