package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncStreamCreateSyncStreamRequest {
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public CreateSyncStreamCreateSyncStreamRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateSyncStreamCreateSyncStreamRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}