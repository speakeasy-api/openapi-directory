package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEvidenceByIdRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public PostEvidenceByIdRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}