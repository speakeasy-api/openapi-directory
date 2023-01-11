package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncMapUpdateSyncMapRequest {
    @SpeakeasyMetadata("form:name=CollectionTtl")
    public Long collectionTtl;
    public UpdateSyncMapUpdateSyncMapRequest withCollectionTtl(Long collectionTtl) {
        this.collectionTtl = collectionTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public UpdateSyncMapUpdateSyncMapRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}