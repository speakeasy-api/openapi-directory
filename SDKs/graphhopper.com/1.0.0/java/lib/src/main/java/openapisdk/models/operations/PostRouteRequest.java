package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRouteRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RouteRequest request;
    public PostRouteRequest withRequest(openapisdk.models.shared.RouteRequest request) {
        this.request = request;
        return this;
    }
}