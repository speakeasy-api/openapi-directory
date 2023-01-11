package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConsentRequest {
    public CreateConsentHeaders headers;
    public CreateConsentRequest withHeaders(CreateConsentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Consents request;
    public CreateConsentRequest withRequest(openapisdk.models.shared.Consents request) {
        this.request = request;
        return this;
    }
    public CreateConsentSecurity security;
    public CreateConsentRequest withSecurity(CreateConsentSecurity security) {
        this.security = security;
        return this;
    }
}