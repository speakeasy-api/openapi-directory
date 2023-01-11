package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnsemblProteinMappingUsingPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RgdidListRequest request;
    public GetEnsemblProteinMappingUsingPostRequest withRequest(openapisdk.models.shared.RgdidListRequest request) {
        this.request = request;
        return this;
    }
}