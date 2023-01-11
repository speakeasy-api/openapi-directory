package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVaccineStatusRequest {
    public GetVaccineStatusHeaders headers;
    public GetVaccineStatusRequest withHeaders(GetVaccineStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VaccineStatusRequest request;
    public GetVaccineStatusRequest withRequest(openapisdk.models.shared.VaccineStatusRequest request) {
        this.request = request;
        return this;
    }
}