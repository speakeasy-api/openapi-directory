package openapisdk.models.operations;



public class RegistrationsLogsListResponse {
    public byte[] body;
    public RegistrationsLogsListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RegistrationsLogsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistrationsLogsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}