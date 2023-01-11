package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncListItemCreateSyncListItemRequest {
    @SpeakeasyMetadata("form:name=CollectionTtl")
    public Long collectionTtl;
    public CreateSyncListItemCreateSyncListItemRequest withCollectionTtl(Long collectionTtl) {
        this.collectionTtl = collectionTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Data")
    public Object data;
    public CreateSyncListItemCreateSyncListItemRequest withData(Object data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("form:name=ItemTtl")
    public Long itemTtl;
    public CreateSyncListItemCreateSyncListItemRequest withItemTtl(Long itemTtl) {
        this.itemTtl = itemTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public CreateSyncListItemCreateSyncListItemRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}