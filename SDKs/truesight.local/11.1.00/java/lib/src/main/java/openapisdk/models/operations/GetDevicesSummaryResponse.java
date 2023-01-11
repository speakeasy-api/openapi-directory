package openapisdk.models.operations;



public class GetDevicesSummaryResponse {
    public byte[] body;
    public GetDevicesSummaryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDevicesSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDevicesSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}