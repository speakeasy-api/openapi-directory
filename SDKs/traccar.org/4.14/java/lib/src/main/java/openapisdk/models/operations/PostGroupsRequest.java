package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGroupsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Group request;
    public PostGroupsRequest withRequest(openapisdk.models.shared.Group request) {
        this.request = request;
        return this;
    }
}