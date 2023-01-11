package openapisdk.models.operations;



public class GetConnectResponse {
    public String contentType;
    public GetConnectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetConnectResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetConnectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getConnect302ApplicationJSONString;
    public GetConnectResponse withGetConnect302ApplicationJsonString(String getConnect302ApplicationJSONString) {
        this.getConnect302ApplicationJSONString = getConnect302ApplicationJSONString;
        return this;
    }
}