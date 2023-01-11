package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeServiceResponse {
    @JsonProperty("api")
    public String api;
    public DescribeServiceResponse withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public DescribeServiceResponse withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("response")
    public ServiceDescription response;
    public DescribeServiceResponse withResponse(ServiceDescription response) {
        this.response = response;
        return this;
    }
    @JsonProperty("status")
    public DescribeServiceResponseStatusEnum status;
    public DescribeServiceResponse withStatus(DescribeServiceResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}