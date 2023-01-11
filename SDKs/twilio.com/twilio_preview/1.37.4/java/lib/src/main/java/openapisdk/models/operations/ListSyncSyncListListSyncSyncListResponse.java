package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncSyncListListSyncSyncListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lists")
    public openapisdk.models.shared.PreviewSyncServiceSyncList[] lists;
    public ListSyncSyncListListSyncSyncListResponse withLists(openapisdk.models.shared.PreviewSyncServiceSyncList[] lists) {
        this.lists = lists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncSyncListListSyncSyncListResponseMeta meta;
    public ListSyncSyncListListSyncSyncListResponse withMeta(ListSyncSyncListListSyncSyncListResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}