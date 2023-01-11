package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSigningBasketRequest {
    public CreateSigningBasketHeaders headers;
    public CreateSigningBasketRequest withHeaders(CreateSigningBasketHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SigningBasket request;
    public CreateSigningBasketRequest withRequest(openapisdk.models.shared.SigningBasket request) {
        this.request = request;
        return this;
    }
    public CreateSigningBasketSecurity security;
    public CreateSigningBasketRequest withSecurity(CreateSigningBasketSecurity security) {
        this.security = security;
        return this;
    }
}