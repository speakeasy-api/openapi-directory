package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RpcRequest {
    @JsonProperty("id")
    public String id;
    public RpcRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("jsonrpc")
    public String jsonrpc;
    public RpcRequest withJsonrpc(String jsonrpc) {
        this.jsonrpc = jsonrpc;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public RpcRequest withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("params")
    public String[] params;
    public RpcRequest withParams(String[] params) {
        this.params = params;
        return this;
    }
}