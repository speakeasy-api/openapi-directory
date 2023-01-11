package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstitutionsGetByIdRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstitutionsGetByIdRequest request;
    public InstitutionsGetByIdRequest withRequest(openapisdk.models.shared.InstitutionsGetByIdRequest request) {
        this.request = request;
        return this;
    }
}