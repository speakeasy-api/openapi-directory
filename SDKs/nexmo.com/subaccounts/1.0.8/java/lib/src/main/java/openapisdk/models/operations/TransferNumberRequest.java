package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferNumberRequest {
    public TransferNumberPathParams pathParams;
    public TransferNumberRequest withPathParams(TransferNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransferNumberRequest request;
    public TransferNumberRequest withRequest(openapisdk.models.shared.TransferNumberRequest request) {
        this.request = request;
        return this;
    }
    public TransferNumberSecurity security;
    public TransferNumberRequest withSecurity(TransferNumberSecurity security) {
        this.security = security;
        return this;
    }
}