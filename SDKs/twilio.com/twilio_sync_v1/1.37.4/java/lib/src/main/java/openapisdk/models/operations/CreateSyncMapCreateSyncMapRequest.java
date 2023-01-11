package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncMapCreateSyncMapRequest {
    @SpeakeasyMetadata("form:name=CollectionTtl")
    public Long collectionTtl;
    public CreateSyncMapCreateSyncMapRequest withCollectionTtl(Long collectionTtl) {
        this.collectionTtl = collectionTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public CreateSyncMapCreateSyncMapRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateSyncMapCreateSyncMapRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}