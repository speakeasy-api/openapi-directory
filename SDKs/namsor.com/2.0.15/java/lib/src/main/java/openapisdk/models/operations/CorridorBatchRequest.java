package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CorridorBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchCorridorIn request;
    public CorridorBatchRequest withRequest(openapisdk.models.shared.BatchCorridorIn request) {
        this.request = request;
        return this;
    }
    public CorridorBatchSecurity security;
    public CorridorBatchRequest withSecurity(CorridorBatchSecurity security) {
        this.security = security;
        return this;
    }
}