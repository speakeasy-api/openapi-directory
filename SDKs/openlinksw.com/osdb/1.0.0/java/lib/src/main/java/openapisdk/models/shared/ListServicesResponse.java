package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListServicesResponse {
    @JsonProperty("api")
    public String api;
    public ListServicesResponse withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public ListServicesResponse withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("response")
    public ServiceDescription[] response;
    public ListServicesResponse withResponse(ServiceDescription[] response) {
        this.response = response;
        return this;
    }
    @JsonProperty("status")
    public ListServicesResponseStatusEnum status;
    public ListServicesResponse withStatus(ListServicesResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}