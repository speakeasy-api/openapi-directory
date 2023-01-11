package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JsonRpcRequest {
    public String serverURL;
    public JsonRpcRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RpcRequest request;
    public JsonRpcRequest withRequest(openapisdk.models.shared.RpcRequest request) {
        this.request = request;
        return this;
    }
    public JsonRpcSecurity security;
    public JsonRpcRequest withSecurity(JsonRpcSecurity security) {
        this.security = security;
        return this;
    }
}