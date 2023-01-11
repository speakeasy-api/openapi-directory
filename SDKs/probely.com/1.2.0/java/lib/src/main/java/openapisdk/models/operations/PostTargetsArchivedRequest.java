package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsArchivedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public PostTargetsArchivedRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}