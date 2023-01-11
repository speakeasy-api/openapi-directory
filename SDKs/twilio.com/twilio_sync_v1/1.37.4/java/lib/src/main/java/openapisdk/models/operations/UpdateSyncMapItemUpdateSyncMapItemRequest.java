package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncMapItemUpdateSyncMapItemRequest {
    @SpeakeasyMetadata("form:name=CollectionTtl")
    public Long collectionTtl;
    public UpdateSyncMapItemUpdateSyncMapItemRequest withCollectionTtl(Long collectionTtl) {
        this.collectionTtl = collectionTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Data")
    public Object data;
    public UpdateSyncMapItemUpdateSyncMapItemRequest withData(Object data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("form:name=ItemTtl")
    public Long itemTtl;
    public UpdateSyncMapItemUpdateSyncMapItemRequest withItemTtl(Long itemTtl) {
        this.itemTtl = itemTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public UpdateSyncMapItemUpdateSyncMapItemRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}