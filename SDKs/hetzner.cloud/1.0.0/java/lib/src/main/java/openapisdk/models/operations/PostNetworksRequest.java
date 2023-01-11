package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNetworksRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostNetworksCreateNetworkRequest request;
    public PostNetworksRequest withRequest(PostNetworksCreateNetworkRequest request) {
        this.request = request;
        return this;
    }
}