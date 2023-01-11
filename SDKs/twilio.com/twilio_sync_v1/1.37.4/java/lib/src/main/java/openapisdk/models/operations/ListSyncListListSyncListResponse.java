package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncListListSyncListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lists")
    public openapisdk.models.shared.SyncV1ServiceSyncList[] lists;
    public ListSyncListListSyncListResponse withLists(openapisdk.models.shared.SyncV1ServiceSyncList[] lists) {
        this.lists = lists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncListListSyncListResponseMeta meta;
    public ListSyncListListSyncListResponse withMeta(ListSyncListListSyncListResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}