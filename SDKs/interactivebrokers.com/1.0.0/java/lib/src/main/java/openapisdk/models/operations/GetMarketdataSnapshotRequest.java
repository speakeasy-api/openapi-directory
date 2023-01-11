package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMarketdataSnapshotRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetMarketdataSnapshotRequestBody[] request;
    public GetMarketdataSnapshotRequest withRequest(GetMarketdataSnapshotRequestBody[] request) {
        this.request = request;
        return this;
    }
}