package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncMapListSyncMapResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maps")
    public openapisdk.models.shared.SyncV1ServiceSyncMap[] maps;
    public ListSyncMapListSyncMapResponse withMaps(openapisdk.models.shared.SyncV1ServiceSyncMap[] maps) {
        this.maps = maps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncMapListSyncMapResponseMeta meta;
    public ListSyncMapListSyncMapResponse withMeta(ListSyncMapListSyncMapResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}