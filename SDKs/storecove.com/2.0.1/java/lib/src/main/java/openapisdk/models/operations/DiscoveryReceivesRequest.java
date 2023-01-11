package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryReceivesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DiscoverableParticipant request;
    public DiscoveryReceivesRequest withRequest(openapisdk.models.shared.DiscoverableParticipant request) {
        this.request = request;
        return this;
    }
}