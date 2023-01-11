package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncServiceListSyncServiceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncServiceListSyncServiceResponseMeta meta;
    public ListSyncServiceListSyncServiceResponse withMeta(ListSyncServiceListSyncServiceResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public openapisdk.models.shared.PreviewSyncService[] services;
    public ListSyncServiceListSyncServiceResponse withServices(openapisdk.models.shared.PreviewSyncService[] services) {
        this.services = services;
        return this;
    }
}