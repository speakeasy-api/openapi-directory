package openapisdk.models.operations;



public class GetTaskScanDataResponse {
    public byte[] body;
    public GetTaskScanDataResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTaskScanDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTaskScanDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}