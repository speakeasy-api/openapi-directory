package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncListUpdateSyncListRequest {
    @SpeakeasyMetadata("form:name=CollectionTtl")
    public Long collectionTtl;
    public UpdateSyncListUpdateSyncListRequest withCollectionTtl(Long collectionTtl) {
        this.collectionTtl = collectionTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public UpdateSyncListUpdateSyncListRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}