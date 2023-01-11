package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeActionResponse {
    @JsonProperty("api")
    public String api;
    public DescribeActionResponse withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public DescribeActionResponse withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("response")
    public ActionDescription response;
    public DescribeActionResponse withResponse(ActionDescription response) {
        this.response = response;
        return this;
    }
    @JsonProperty("status")
    public DescribeActionResponseStatusEnum status;
    public DescribeActionResponse withStatus(DescribeActionResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}