package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncListCreateSyncListRequest {
    @SpeakeasyMetadata("form:name=CollectionTtl")
    public Long collectionTtl;
    public CreateSyncListCreateSyncListRequest withCollectionTtl(Long collectionTtl) {
        this.collectionTtl = collectionTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public CreateSyncListCreateSyncListRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateSyncListCreateSyncListRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}