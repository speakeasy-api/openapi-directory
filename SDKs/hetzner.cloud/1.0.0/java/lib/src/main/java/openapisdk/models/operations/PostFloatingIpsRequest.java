package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFloatingIpsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostFloatingIpsCreateFloatingIpRequest request;
    public PostFloatingIpsRequest withRequest(PostFloatingIpsCreateFloatingIpRequest request) {
        this.request = request;
        return this;
    }
}