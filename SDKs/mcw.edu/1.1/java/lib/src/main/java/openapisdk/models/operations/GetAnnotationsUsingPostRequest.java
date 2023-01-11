package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnnotationsUsingPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AnnotationRequest request;
    public GetAnnotationsUsingPostRequest withRequest(openapisdk.models.shared.AnnotationRequest request) {
        this.request = request;
        return this;
    }
}