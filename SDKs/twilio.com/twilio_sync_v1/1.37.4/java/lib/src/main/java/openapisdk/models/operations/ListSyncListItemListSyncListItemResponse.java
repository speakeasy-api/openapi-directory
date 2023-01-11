package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncListItemListSyncListItemResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem[] items;
    public ListSyncListItemListSyncListItemResponse withItems(openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncListItemListSyncListItemResponseMeta meta;
    public ListSyncListItemListSyncListItemResponse withMeta(ListSyncListItemListSyncListItemResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}