package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncSyncListItemListSyncSyncListItemResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem[] items;
    public ListSyncSyncListItemListSyncSyncListItemResponse withItems(openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncSyncListItemListSyncSyncListItemResponseMeta meta;
    public ListSyncSyncListItemListSyncSyncListItemResponse withMeta(ListSyncSyncListItemListSyncSyncListItemResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}