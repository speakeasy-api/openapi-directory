package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncMapItemListSyncMapItemResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem[] items;
    public ListSyncMapItemListSyncMapItemResponse withItems(openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncMapItemListSyncMapItemResponseMeta meta;
    public ListSyncMapItemListSyncMapItemResponse withMeta(ListSyncMapItemListSyncMapItemResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}