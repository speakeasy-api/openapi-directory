package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkUnblockRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NetworkUnblock request;
    public NetworkUnblockRequest withRequest(openapisdk.models.shared.NetworkUnblock request) {
        this.request = request;
        return this;
    }
}