package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncListItemUpdateSyncListItemRequest {
    @SpeakeasyMetadata("form:name=CollectionTtl")
    public Long collectionTtl;
    public UpdateSyncListItemUpdateSyncListItemRequest withCollectionTtl(Long collectionTtl) {
        this.collectionTtl = collectionTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Data")
    public Object data;
    public UpdateSyncListItemUpdateSyncListItemRequest withData(Object data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("form:name=ItemTtl")
    public Long itemTtl;
    public UpdateSyncListItemUpdateSyncListItemRequest withItemTtl(Long itemTtl) {
        this.itemTtl = itemTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public UpdateSyncListItemUpdateSyncListItemRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}