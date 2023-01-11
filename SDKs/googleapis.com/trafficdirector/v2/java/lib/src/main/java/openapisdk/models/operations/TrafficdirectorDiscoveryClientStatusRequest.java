package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrafficdirectorDiscoveryClientStatusRequest {
    public TrafficdirectorDiscoveryClientStatusQueryParams queryParams;
    public TrafficdirectorDiscoveryClientStatusRequest withQueryParams(TrafficdirectorDiscoveryClientStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClientStatusRequest request;
    public TrafficdirectorDiscoveryClientStatusRequest withRequest(openapisdk.models.shared.ClientStatusRequest request) {
        this.request = request;
        return this;
    }
    public TrafficdirectorDiscoveryClientStatusSecurity security;
    public TrafficdirectorDiscoveryClientStatusRequest withSecurity(TrafficdirectorDiscoveryClientStatusSecurity security) {
        this.security = security;
        return this;
    }
}