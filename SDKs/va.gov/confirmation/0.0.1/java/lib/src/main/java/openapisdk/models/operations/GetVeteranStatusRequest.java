package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVeteranStatusRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VeteranStatusRequest request;
    public GetVeteranStatusRequest withRequest(openapisdk.models.shared.VeteranStatusRequest request) {
        this.request = request;
        return this;
    }
    public GetVeteranStatusSecurity security;
    public GetVeteranStatusRequest withSecurity(GetVeteranStatusSecurity security) {
        this.security = security;
        return this;
    }
}