package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnsemblTranscriptMappingUsingPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RgdidListRequest request;
    public GetEnsemblTranscriptMappingUsingPostRequest withRequest(openapisdk.models.shared.RgdidListRequest request) {
        this.request = request;
        return this;
    }
}