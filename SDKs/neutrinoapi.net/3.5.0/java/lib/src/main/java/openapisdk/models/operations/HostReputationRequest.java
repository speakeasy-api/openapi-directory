package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HostReputationRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public HostReputationRequestBody request;
    public HostReputationRequest withRequest(HostReputationRequestBody request) {
        this.request = request;
        return this;
    }
}