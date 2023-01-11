package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncMapItemCreateSyncMapItemRequest {
    @SpeakeasyMetadata("form:name=CollectionTtl")
    public Long collectionTtl;
    public CreateSyncMapItemCreateSyncMapItemRequest withCollectionTtl(Long collectionTtl) {
        this.collectionTtl = collectionTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Data")
    public Object data;
    public CreateSyncMapItemCreateSyncMapItemRequest withData(Object data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("form:name=ItemTtl")
    public Long itemTtl;
    public CreateSyncMapItemCreateSyncMapItemRequest withItemTtl(Long itemTtl) {
        this.itemTtl = itemTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Key")
    public String key;
    public CreateSyncMapItemCreateSyncMapItemRequest withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public CreateSyncMapItemCreateSyncMapItemRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}