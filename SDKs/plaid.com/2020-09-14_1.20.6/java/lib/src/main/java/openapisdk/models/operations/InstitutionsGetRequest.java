package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstitutionsGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstitutionsGetRequest request;
    public InstitutionsGetRequest withRequest(openapisdk.models.shared.InstitutionsGetRequest request) {
        this.request = request;
        return this;
    }
}