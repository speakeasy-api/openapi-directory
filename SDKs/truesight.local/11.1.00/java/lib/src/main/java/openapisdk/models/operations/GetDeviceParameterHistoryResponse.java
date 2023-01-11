package openapisdk.models.operations;



public class GetDeviceParameterHistoryResponse {
    public byte[] body;
    public GetDeviceParameterHistoryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeviceParameterHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeviceParameterHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}