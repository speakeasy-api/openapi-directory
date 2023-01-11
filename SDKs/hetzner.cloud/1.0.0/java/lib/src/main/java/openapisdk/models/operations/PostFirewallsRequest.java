package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFirewallsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostFirewallsCreateFirewallRequest request;
    public PostFirewallsRequest withRequest(PostFirewallsCreateFirewallRequest request) {
        this.request = request;
        return this;
    }
}