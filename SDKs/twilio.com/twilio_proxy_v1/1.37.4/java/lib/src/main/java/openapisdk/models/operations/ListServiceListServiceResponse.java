package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceListServiceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListServiceListServiceResponseMeta meta;
    public ListServiceListServiceResponse withMeta(ListServiceListServiceResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public openapisdk.models.shared.ProxyV1Service[] services;
    public ListServiceListServiceResponse withServices(openapisdk.models.shared.ProxyV1Service[] services) {
        this.services = services;
        return this;
    }
}