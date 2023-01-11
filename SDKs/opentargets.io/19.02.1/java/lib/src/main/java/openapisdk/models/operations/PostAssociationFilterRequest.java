package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociationFilterRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public PostAssociationFilterRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}