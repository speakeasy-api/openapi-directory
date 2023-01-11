package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncStreamUpdateSyncStreamRequest {
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public UpdateSyncStreamUpdateSyncStreamRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}