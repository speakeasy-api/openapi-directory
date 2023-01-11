package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstitutionsSearchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstitutionsSearchRequest request;
    public InstitutionsSearchRequest withRequest(openapisdk.models.shared.InstitutionsSearchRequest request) {
        this.request = request;
        return this;
    }
}