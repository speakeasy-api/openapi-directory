package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEvidenceFilterRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public PostEvidenceFilterRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}