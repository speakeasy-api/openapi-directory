package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDiseaseByIdRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public PostDiseaseByIdRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}