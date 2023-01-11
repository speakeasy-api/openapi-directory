package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncSyncMapListSyncSyncMapResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maps")
    public openapisdk.models.shared.PreviewSyncServiceSyncMap[] maps;
    public ListSyncSyncMapListSyncSyncMapResponse withMaps(openapisdk.models.shared.PreviewSyncServiceSyncMap[] maps) {
        this.maps = maps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncSyncMapListSyncSyncMapResponseMeta meta;
    public ListSyncSyncMapListSyncSyncMapResponse withMeta(ListSyncSyncMapListSyncSyncMapResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}