package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncSyncMapItemListSyncSyncMapItemResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem[] items;
    public ListSyncSyncMapItemListSyncSyncMapItemResponse withItems(openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncSyncMapItemListSyncSyncMapItemResponseMeta meta;
    public ListSyncSyncMapItemListSyncSyncMapItemResponse withMeta(ListSyncSyncMapItemListSyncSyncMapItemResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}