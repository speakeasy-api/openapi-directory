package openapisdk.models.operations;



public class GetTaskChangeReportResponse {
    public byte[] body;
    public GetTaskChangeReportResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTaskChangeReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTaskChangeReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}