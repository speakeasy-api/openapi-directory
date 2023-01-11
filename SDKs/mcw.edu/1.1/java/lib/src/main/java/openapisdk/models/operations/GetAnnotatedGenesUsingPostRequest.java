package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnnotatedGenesUsingPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AnnotatedGeneRequest request;
    public GetAnnotatedGenesUsingPostRequest withRequest(openapisdk.models.shared.AnnotatedGeneRequest request) {
        this.request = request;
        return this;
    }
}