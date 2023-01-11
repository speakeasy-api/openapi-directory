package openapisdk.models.operations;



public class JsonRpcResponse {
    public String contentType;
    public JsonRpcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public JsonRpcResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public JsonRpcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RpcResponse rpcResponse;
    public JsonRpcResponse withRpcResponse(openapisdk.models.shared.RpcResponse rpcResponse) {
        this.rpcResponse = rpcResponse;
        return this;
    }
}